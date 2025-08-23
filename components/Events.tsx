'use client'

import { motion } from 'framer-motion'
import { 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon,
  UserGroupIcon,
  VideoCameraIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const Events = () => {
  const eventTypes = [
    {
      icon: VideoCameraIcon,
      title: 'Virtual Workshops',
      description: 'Interactive online sessions with industry experts and educators',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: GlobeAltIcon,
      title: 'International Conferences',
      description: 'Connect with students worldwide and discuss global economic trends',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Networking Events',
      description: 'Build connections with peers, mentors, and industry professionals',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Join Our{' '}
            <span className="text-gradient">Events</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            From virtual workshops to international conferences, our events provide 
            opportunities to learn from experts, network with peers, and showcase your work.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {eventTypes.map((type, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <type.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {type.title}
              </h3>
              <p className="text-gray-600">
                {type.description}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CalendarIcon className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Events Coming Soon
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're planning exciting events and workshops to help you learn about finance and economics. 
              Stay tuned for updates on our social media platforms!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://discord.com/invite/YqAQbENq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Join Discord for Updates
              </a>
              <a 
                href="https://www.instagram.com/youthcap.official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Events
