'use client'

import { motion } from 'framer-motion'
import { 
  AcademicCapIcon, 
  GlobeAltIcon, 
  ChartBarIcon,
  UserGroupIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const Team = () => {
  const teamMembers = [
    {
      name: 'YouthCap Team',
      role: 'Student Leaders',
      bio: 'Our team consists of passionate students and educators dedicated to making financial education accessible to all.',
      expertise: ['Financial Education', 'Student Leadership', 'Community Building'],
      image: '/api/placeholder/300/300',
      color: 'from-blue-500 to-cyan-500'
    }
  ]

  const values = [
    {
      icon: HeartIcon,
      title: 'Passion for Learning',
      description: 'We believe every student deserves access to quality financial education.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Perspective',
      description: 'Our diverse team brings international insights to every project and decision.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: SparklesIcon,
      title: 'Innovation First',
      description: 'We constantly explore new ways to make learning engaging and effective.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'Success comes from working together and supporting each other\'s growth.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Meet Our{' '}
            <span className="text-gradient">Team</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Our diverse team of educators, professionals, and students work together 
            to create an inclusive and engaging learning environment for teens worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card p-8 text-center max-w-2xl mx-auto">
                <div className={`w-32 h-32 bg-gradient-to-r ${member.color} rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold`}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4 text-lg">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {member.bio}
                </p>
                
                <div className="flex flex-wrap justify-center gap-3">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-2 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-full h-1 bg-gradient-to-r ${member.color} rounded-full`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Want to Join Our Team?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who share our vision of 
            democratizing financial education. Whether you're a student, educator, 
            or professional, there might be a place for you on our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
            <a href="#projects" className="btn-outline">
              View Opportunities
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: 'Student', label: 'Led Initiative' },
            { number: 'Global', label: 'Community' },
            { number: 'Free', label: 'Education' },
            { number: 'Open', label: 'To All' }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Team
