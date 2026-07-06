import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Music from './Music'
import Contact from './Contact'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView()
  }, [hash])

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Music />
      <Contact />
    </>
  )
}
