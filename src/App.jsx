import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Music from './pages/Music'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './styles/global.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Music />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
