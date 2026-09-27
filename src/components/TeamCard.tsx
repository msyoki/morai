import { motion } from 'framer-motion'
import { TeamMember } from '../data/team'

interface TeamCardProps {
  member: TeamMember
  index: number
}

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group text-center"
    >
      <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-navy-light mb-5">
        <img
          src={member.image}
          alt={member.name}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: member.imagePosition }}
          loading="lazy"
        />
        {member.bio && (
          <span className="absolute top-3 right-3 bg-gold-alt text-navy text-xs font-sans px-2 py-1 rounded-full">
            Bio
          </span>
        )}
      </div>
      <h3 className="text-lg sm:text-xl font-display font-normal text-navy">
        {member.name}
      </h3>
      <p className="text-sm text-gold-alt font-sans font-medium mt-1">
        {member.role}
      </p>
    </motion.div>
  )
}