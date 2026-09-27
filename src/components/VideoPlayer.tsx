import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Loader2,
  RotateCcw,
} from 'lucide-react'

interface VideoPlayerProps {
  src: string
  poster?: string
  title?: string
  ariaLabel?: string
  className?: string
  maxHeight?: number
}

export function VideoPlayer({
  src,
  poster,
  title,
  ariaLabel = 'Video player',
  className = '',
  maxHeight = 520,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLInputElement>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolumeState] = useState(1)
  const [showControls, setShowControls] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [buffered, setBuffered] = useState(0)
  const [hasEnded, setHasEnded] = useState(false)
  const controlsTimeoutRef = useRef<NodeJS.Timeout>()

  const defaultPoster = '/images/moirai-footer-logo-optimized.png'
  const effectivePoster = poster || defaultPoster

  const togglePlay = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (isPlaying) {
      video.pause()
    } else {
      video.play().catch(() => {})
    }
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    setCurrentTime(video.currentTime)
  }, [])

  const handleDurationChange = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    setDuration(video.duration)
  }, [])

  const handleProgress = useCallback(() => {
    const video = videoRef.current
    if (!video || !progressRef.current) return
    const percent = (video.currentTime / video.duration) * 100
    progressRef.current.style.setProperty('--progress', `${percent}%`)
  }, [])

  const handleBufferedChange = useCallback(() => {
    const video = videoRef.current
    if (!video || !video.buffered.length) return
    const end = video.buffered.end(video.buffered.length - 1)
    const percent = (end / video.duration) * 100
    if (progressRef.current) {
      progressRef.current.style.setProperty('--buffered', `${percent}%`)
    }
  }, [])

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current
    if (!video) return
    const time = (Number(e.target.value) / 100) * video.duration
    video.currentTime = time
    setCurrentTime(time)
  }, [])

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current
    if (!video) return
    const vol = Number(e.target.value)
    video.volume = vol
    setVolumeState(vol)
    setIsMuted(vol === 0)
  }, [])

  const toggleMute = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = !isMuted
    setIsMuted(!isMuted)
  }, [isMuted])

  const toggleFullscreen = useCallback(() => {
    const container = containerRef.current
    if (!container) return
    if (!isFullscreen) {
      container.requestFullscreen().catch(() => {})
    } else {
      document.exitFullscreen().catch(() => {})
    }
    setIsFullscreen(!isFullscreen)
  }, [isFullscreen])

  const replayVideo = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = 0
    video.play().catch(() => {})
    setIsPlaying(true)
    setHasEnded(false)
  }, [])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const video = videoRef.current
    if (!video) return
    switch (e.key) {
      case ' ':
      case 'k':
        e.preventDefault()
        togglePlay()
        break
      case 'ArrowLeft':
        e.preventDefault()
        video.currentTime = Math.max(0, video.currentTime - 10)
        break
      case 'ArrowRight':
        e.preventDefault()
        video.currentTime = Math.min(video.duration, video.currentTime + 10)
        break
      case 'ArrowUp':
        e.preventDefault()
        video.volume = Math.min(1, video.volume + 0.1)
        setVolumeState(video.volume)
        break
      case 'ArrowDown':
        e.preventDefault()
        video.volume = Math.max(0, video.volume - 0.1)
        setVolumeState(video.volume)
        break
      case 'm':
        toggleMute()
        break
      case 'f':
        toggleFullscreen()
        break
    }
  }, [togglePlay, toggleMute, toggleFullscreen])

  const handleMouseMove = useCallback(() => {
    // Controls always visible
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('durationchange', handleDurationChange)
    video.addEventListener('progress', handleBufferedChange)
    video.addEventListener('loadeddata', () => setIsLoading(false))
    video.addEventListener('waiting', () => setIsLoading(true))
    video.addEventListener('canplay', () => setIsLoading(false))
    video.addEventListener('ended', () => {
      setIsPlaying(false)
      setHasEnded(true)
    })
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('durationchange', handleDurationChange)
      video.removeEventListener('progress', handleBufferedChange)
      video.removeEventListener('loadeddata', () => setIsLoading(false))
      video.removeEventListener('waiting', () => setIsLoading(true))
      video.removeEventListener('ended', () => {
        setIsPlaying(false)
        setHasEnded(false)
      })
    }
  }, [handleTimeUpdate, handleDurationChange, handleBufferedChange])

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
    }
  }, [])

  const showPoster = !isPlaying && (duration === 0 || hasEnded)
  const maxHeightStyle = { maxHeight: `${maxHeight}px` } as React.CSSProperties

  return (
    <motion.div
      ref={containerRef}
      className={`relative rounded-xl overflow-hidden bg-white ${className}`}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
      style={{ maxHeight: `${maxHeight}px` }}
    >
      {/* Video container */}
      <div className="relative bg-white" style={maxHeightStyle}>
        <video
          ref={videoRef}
          src={src}
          poster={effectivePoster}
          playsInline
          preload="metadata"
          onClick={togglePlay}
          onTimeUpdate={handleTimeUpdate}
          onDurationChange={handleDurationChange}
          onProgress={handleBufferedChange}
          onWaiting={() => setIsLoading(true)}
          onCanPlay={() => setIsLoading(false)}
          onLoadedData={() => setIsLoading(false)}
          onEnded={() => {
            setIsPlaying(false)
            setHasEnded(true)
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onKeyDown={handleKeyDown}
          className="w-full h-auto max-h-full object-contain"
          style={{ maxHeight: `${maxHeight}px` }}
        />

        {/* Loading overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/95 z-10">
            <div className="w-12 h-12 border-4 border-navy border-t-gold-alt rounded-full animate-spin" aria-hidden="true" />
            <span className="sr-only">Loading video...</span>
          </div>
        )}

        {/* Poster overlay (before play or after ended) */}
        {showPoster && (
          <div className="absolute inset-0 z-5 flex items-center justify-center bg-white">
            <div className="flex flex-col items-center justify-center gap-4 p-8">
              <img
                src="/images/moirai-footer-logo-optimized.png"
                alt="Moirai"
                className="w-auto h-32 sm:h-40 object-contain drop-shadow-lg"
                aria-hidden="true"
              />
              <button
                onClick={hasEnded ? replayVideo : togglePlay}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-navy text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-navy-light focus:outline-none focus:ring-4 focus:ring-navy/30"
                aria-label={hasEnded ? 'Replay video' : 'Play video'}
              >
                {hasEnded ? (
                  <RotateCcw className="w-7 h-7 ml-1 text-white" aria-hidden="true" />
                ) : (
                  <Play className="w-7 h-7 ml-1 text-white" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        )}

        {/* Loading overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/95 z-10">
            <div className="w-12 h-12 border-4 border-navy border-t-gold-alt rounded-full animate-spin" aria-hidden="true" />
            <span className="sr-only">Loading video...</span>
          </div>
        )}
      </div>

      {/* Controls section - Always visible below video with high-contrast background */}
      <div className="bg-navy rounded-b-xl border-t-2 border-gold-alt">
        {/* Progress bar - thicker and more visible */}
        <div className="h-4 bg-white/10 relative cursor-pointer px-4" onClick={(e) => {
          const video = videoRef.current
          if (!video) return
          const rect = e.currentTarget.getBoundingClientRect()
          const percent = (e.nativeEvent.clientX - rect.left) / rect.width
          video.currentTime = percent * video.duration
        }}>
          {/* Buffered */}
          <div
            className="absolute top-0 left-0 h-full bg-gold-alt/50"
            style={{ width: `var(--buffered, 0%)` }}
            aria-hidden="true"
          />
          {/* Progress */}
          <input
            ref={progressRef}
            type="range"
            min="0"
            max="100"
            value={duration > 0 ? (currentTime / duration) * 100 : 0}
            onChange={handleSeek}
            onInput={handleProgress}
            className="absolute top-0 left-0 w-full h-full appearance-none bg-transparent cursor-pointer"
            style={{
              background: 'linear-gradient(to right, #FBB143 var(--progress, 0%), transparent var(--progress, 0%))',
            }}
            aria-label="Seek"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={duration > 0 ? Math.round((currentTime / duration) * 100) : 0}
          />
        </div>

        {/* Control buttons - High contrast static background */}
        <div className="flex items-center justify-between p-4 sm:p-6 bg-navy bg-gradient-to-r from-navy to-navy-dark">
          <div className="flex items-center gap-4">
            <button
              onClick={hasEnded ? replayVideo : togglePlay}
              className="p-4 rounded-full bg-gold-alt text-navy hover:bg-gold-bright transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-gold-alt focus:ring-offset-2 focus:ring-offset-navy shadow-lg"
              aria-label={hasEnded ? 'Replay' : (isPlaying ? 'Pause' : 'Play')}
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 text-navy" aria-hidden="true" />
              ) : (
                <Play className="w-7 h-7 ml-1 text-navy" aria-hidden="true" />
              )}
            </button>

            <div className="flex items-center gap-4 text-base sm:text-lg text-white font-sans font-semibold">
              <span aria-live="off">{formatTime(currentTime)}</span>
              <span className="text-white/70">/</span>
              <span aria-live="off">{formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <button
                onClick={toggleMute}
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-alt focus:ring-offset-2 focus:ring-offset-navy"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-6 h-6 text-white" aria-hidden="true" />
                ) : (
                  <Volume2 className="w-6 h-6 text-white" aria-hidden="true" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-32 h-3 appearance-none bg-white/30 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-alt"
                style={{
                  background: `linear-gradient(to right, #FBB143 ${volume * 100}%, rgba(255,255,255,0.4) ${volume * 100}%)`,
                }}
                aria-label="Volume"
              />
            </div>

            <button
              onClick={toggleFullscreen}
              className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-alt focus:ring-offset-2 focus:ring-offset-navy"
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              {isFullscreen ? (
                <Minimize className="w-6 h-6 text-white" aria-hidden="true" />
              ) : (
                <Maximize className="w-6 h-6 text-white" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Title overlay (optional) */}
      {title && (
        <div className="absolute top-4 left-4 right-4 z-10 pointer-events-none">
          <div className="max-w-2xl mx-auto text-left">
            <h3 className="text-base sm:text-lg font-display font-normal text-white/95 leading-tight drop-shadow-md">
              {title}
            </h3>
          </div>
        </div>
      )}
    </motion.div>
  )
}