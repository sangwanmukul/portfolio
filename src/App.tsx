import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { portfolio } from './data/portfolio'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import LoadingScreen from './components/LoadingScreen'
import AnimatedBackground from './components/AnimatedBackground'

const HeroSection = lazy(() => import('./components/HeroSection'))
const AboutSection = lazy(() => import('./components/AboutSection'))
const ExperienceSection = lazy(() => import('./components/ExperienceSection'))
const ProjectsSection = lazy(() => import('./components/ProjectsSection'))
const ResearchSection = lazy(() => import('./components/ResearchSection'))
const SkillsSection = lazy(() => import('./components/SkillsSection'))
const AchievementsSection = lazy(() => import('./components/AchievementsSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600)
      const sections = document.querySelectorAll<HTMLElement>('section[id]')
      let current = 'home'
      sections.forEach((section) => {
        const offset = 180
        const top = section.offsetTop - offset
        const height = section.offsetHeight
        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.id
        }
      })
      setActiveSection(current)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <ScrollProgress />
      <Navbar
        activeSection={activeSection}
        navItems={portfolio.navItems.map((label) => ({ label, href: label.toLowerCase() }))}
      />
      <AnimatePresence>{loading ? <LoadingScreen key="loading" /> : null}</AnimatePresence>

      <main className="relative overflow-hidden">
        <AnimatedBackground />
        <Suspense fallback={null}>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ResearchSection />
          <SkillsSection />
          <AchievementsSection />
          <ContactSection />
          <Footer />
        </Suspense>
      </main>

      <AnimatePresence>
        {showBackToTop ? (
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-900/90 text-cyan-300 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl"
            aria-label="Back to top"
          >
            <ArrowUp />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default App
