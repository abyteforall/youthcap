'use client'

import { motion } from 'framer-motion'
import { 
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  PlayCircleIcon,
  CameraIcon
} from '@heroicons/react/24/outline'

const Contact = () => {
  const socialPlatforms = [
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Discord Community',
      description: 'Join our Discord server to connect with other students, ask questions, and participate in discussions about finance and economics.',
      link: 'https://discord.com/invite/YqAQbENq',
      color: 'from-indigo-500 to-purple-500',
      buttonText: 'Join Discord'
    },
    {
      icon: VideoCameraIcon,
      title: 'TikTok',
      description: 'Follow us on TikTok for short-form educational content, tips, and insights about finance and economics.',
      link: 'https://www.tiktok.com/@YouthCapOfficial',
      color: 'from-pink-500 to-red-500',
      buttonText: 'Follow on TikTok'
    },
    {
      icon: PlayCircleIcon,
      title: 'YouTube',
      description: 'Subscribe to our YouTube channel for in-depth tutorials, project showcases, and educational videos.',
      link: 'https://www.youtube.com/@YouthCapOfficial',
      color: 'from-red-500 to-orange-500',
      buttonText: 'Subscribe on YouTube'
    },
    {
      icon: CameraIcon,
      title: 'Instagram',
      description: 'Follow us on Instagram for updates, behind-the-scenes content, and community highlights.',
      link: 'https://www.instagram.com/youthcap.official',
      color: 'from-purple-500 to-pink-500',
      buttonText: 'Follow on Instagram'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Connect With{' '}
            <span className="text-gradient">YouthCap</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Join our community across different platforms to stay updated, 
            connect with other students, and access our educational content.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card p-8 h-full flex flex-col">
                <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {platform.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow mb-6">
                  {platform.description}
                </p>
                
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r ${platform.color} text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
                >
                  {platform.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Join Our Growing Community
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Connect with students worldwide who share your passion for learning about finance and economics. 
            Our community is the perfect place to ask questions, share knowledge, and grow together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://discord.com/invite/YqAQbENq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Join Discord Community
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
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
