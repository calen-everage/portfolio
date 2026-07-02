import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
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
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
