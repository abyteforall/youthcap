import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Projects from '@/components/Projects'
import Events from '@/components/Events'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <Projects />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
