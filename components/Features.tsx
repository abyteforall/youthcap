'use client'

import { motion } from 'framer-motion'
import { 
  AcademicCapIcon, 
  ChartBarIcon, 
  GlobeAltIcon, 
  UserGroupIcon,
  LightBulbIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

const Features = () => {
  const features = [
    {
      icon: AcademicCapIcon,
      title: 'Comprehensive Learning',
      description: 'Cover everything from basic economics to advanced financial instruments, all explained in student-friendly terms.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Real Market Analysis',
      description: 'Analyze actual market data, track real companies, and understand how global events affect financial markets.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Trade Focus',
      description: 'Explore international commerce, currency exchange, and how countries interact economically.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Team Collaboration',
      description: 'Work with peers from around the world, building communication and leadership skills.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation Projects',
      description: 'Develop creative solutions to real financial challenges, from sustainable investing to fintech applications.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Future-Ready Skills',
      description: 'Build the knowledge and confidence needed to navigate tomorrow\'s financial landscape.',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            What Makes YouthCap{' '}
            <span className="text-gradient">Special</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Our unique approach combines theoretical knowledge with practical application, 
            creating an engaging learning experience that prepares students for real-world challenges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card p-8 h-full flex flex-col">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {feature.description}
                </p>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-full h-1 bg-gradient-to-r ${feature.color} rounded-full`}></div>
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
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Learning That Sticks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">Hands-on</div>
                <div className="text-gray-600">Learning Approach</div>
                <div className="text-sm text-gray-500">Learn by doing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">Flexible</div>
                <div className="text-gray-600">Program Structure</div>
                <div className="text-sm text-gray-500">Learn at your own pace</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">Global</div>
                <div className="text-gray-600">Community Access</div>
                <div className="text-sm text-gray-500">Connect with students worldwide</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
