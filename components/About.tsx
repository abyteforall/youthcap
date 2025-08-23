'use client'

import { motion } from 'framer-motion'
import { CheckCircleIcon, LightBulbIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const About = () => {
  const features = [
    {
      icon: CheckCircleIcon,
      title: 'Hands-on Learning',
      description: 'We believe in learning by doing. Every concept is reinforced through practical projects and real-world applications.'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation Focus',
      description: 'Our projects encourage creative thinking and innovative solutions to real financial challenges.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Perspective',
      description: 'We explore international markets, trade policies, and global economic trends to broaden understanding.'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaborative Environment',
      description: 'Students work together in teams, sharing knowledge and building lasting connections.'
    }
  ]

  const stats = [
    { number: 'Growing', label: 'Student Community' },
    { number: 'Ongoing', label: 'Learning Projects' },
    { number: 'Global', label: 'Student Network' },
    { number: '100%', label: 'Free Access' }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            At YouthCap, we don't just{' '}
            <span className="text-gradient">learn</span> — we{' '}
            <span className="text-gradient">create</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            From research and discussions to hands-on group projects, we turn knowledge into action. 
            Our goal is to build a global community of curious, capable, and confident young people 
            who understand how the financial world works — and are ready to lead it!
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To democratize financial education by making complex economic concepts accessible, 
              engaging, and practical for teenagers worldwide. We believe that understanding 
              finance and economics is not just about personal wealth, but about building a 
              more informed and equitable global society.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to join the future of finance?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="btn-primary">
              Explore Our Projects
            </a>
            <a href="#team" className="btn-outline">
              Meet Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
