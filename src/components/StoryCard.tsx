import { motion } from 'framer-motion'
import { Calendar, Tag } from 'lucide-react'
import { Story } from '../data/stories'

interface StoryCardProps {
  story: Story
  index: number
}

export function StoryCard({ story, index }: StoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-5 bg-charcoal">
        {!story.placeholder && (
          <img
            src={story.image}
            alt={story.title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-charcoal/30"
          aria-hidden="true"
        />
        {story.placeholder && (
          <div className="absolute top-3 left-3 bg-charcoal/80 text-ivory/80 text-xs font-sans px-3 py-1 rounded-full">
            Placeholder
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center gap-3 text-xs text-ivory/70 mb-2">
            <span className="inline-flex items-center gap-1">
              <Tag className="w-3 h-3" aria-hidden="true" />
              {story.categoryLabel}
            </span>
            {story.date && (
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3 h-3" aria-hidden="true" />
                {story.date}
              </span>
            )}
          </div>
          <h3 className="text-xl font-display font-normal text-ivory leading-tight">
            {story.title}
          </h3>
        </div>
      </div>
      <p className="text-muted leading-relaxed text-sm sm:text-base">
        {story.excerpt}
      </p>
    </motion.div>
  )
}