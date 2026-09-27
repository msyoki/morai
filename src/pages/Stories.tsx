import { SectionHeader } from '../components/SectionHeader'
import { StoryCard } from '../components/StoryCard'
import { stories, storyCategories } from '../data/stories'
import { useState } from 'react'
import { FadeIn } from '../components/AnimatedSection'

export default function Stories() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredStories =
    activeCategory === 'all'
      ? stories
      : stories.filter((s) => s.category === activeCategory)

  return (
    <>
      <section className="pt-32 sm:pt-40 lg:pt-48 pb-16 bg-lavender-light">
        <div className="container-custom text-center">
          <span className="inline-block text-xs font-sans font-medium uppercase tracking-[0.2em] text-gold-alt mb-4">
            Stories of Hope
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-normal text-navy leading-tight mb-6">
            Stories
          </h1>
          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Moments of restoration, community, and the people behind our work.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 lg:py-36 bg-white" aria-labelledby="stories-heading">
        <div className="container-custom">
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`
                px-5 py-2 rounded-full text-sm font-sans font-medium transition-all
                ${activeCategory === 'all'
                  ? 'bg-navy text-white'
                  : 'bg-white text-navy/70 hover:bg-lavender-light border border-border'
                }
              `}
            >
              All
            </button>
            {storyCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  px-5 py-2 rounded-full text-sm font-sans font-medium transition-all
                  ${activeCategory === cat.id
                    ? 'bg-navy text-white'
                    : 'bg-white text-navy/70 hover:bg-lavender-light border border-border'
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <StoryCard key={story.id} story={story} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}