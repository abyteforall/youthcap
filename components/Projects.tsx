'use client'

import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  GlobeAltIcon, 
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const Projects = () => {
  const projects = [
    {
      icon: ChartBarIcon,
      title: 'Learning Projects',
      description: 'Hands-on projects designed to help students understand financial concepts through practical application.',
      category: 'Education',
      difficulty: 'All Levels',
      duration: 'Varies',
      participants: 'Small Groups',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Markets',
      description: 'Explore international economics and trade through research and discussion-based learning.',
      category: 'International',
      difficulty: 'All Levels',
      duration: 'Ongoing',
      participants: 'Community',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Financial Literacy',
      description: 'Build fundamental knowledge about personal finance, investing, and economic principles.',
      category: 'Basics',
      difficulty: 'Beginner Friendly',
      duration: 'Flexible',
      participants: 'Open to All',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const categories = ['All', 'Investing', 'International Trade', 'Digital Finance', 'Business Finance', 'Technology', 'ESG Finance']

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Explore Our{' '}
            <span className="text-gradient">Projects</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            From stock market simulations to sustainable investing research, our projects 
            cover the full spectrum of financial education. Each project is designed to 
            provide hands-on experience with real-world applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow mb-4">
                  {project.description}
                </p>
                
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex justify-between">
                    <span>Difficulty:</span>
                    <span className="font-medium">{project.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">{project.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Team Size:</span>
                    <span className="font-medium">{project.participants}</span>
                  </div>
                </div>
                
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-full h-1 bg-gradient-to-r ${project.color} rounded-full`}></div>
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
          className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Learning Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Learn Together',
                description: 'Join discussions and learn from peers in our community'
              },
              {
                step: '02',
                title: 'Apply Knowledge',
                description: 'Practice concepts through hands-on activities'
              },
              {
                step: '03',
                title: 'Share & Grow',
                description: 'Contribute to discussions and help others learn'
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{phase.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {phase.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to learn about finance?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Join Our Community
            </a>
            <a href="#events" className="btn-outline">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
