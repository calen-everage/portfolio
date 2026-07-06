import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import GuitarAmplifierEffectsProcessor from './pages/projects/GuitarAmplifierEffectsProcessor'
import Footer from './components/Footer'
import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/guitar-amplifier-effects-processor" element={<GuitarAmplifierEffectsProcessor />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
