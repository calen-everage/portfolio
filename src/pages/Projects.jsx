import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Audio Limiter / Compressor Circuit',
    description: 'Designed and simulated a guitar signal limiter, overdrive distortion, and active low-pass filter using op-amps and MOSFETs, with a regulated DC power supply.',
    tech: ['LTspice', 'Analog Design'],
  },
  {
    title: 'FPGA Dice Game',
    description: 'Implemented a 3-bit digital dice game on an FPGA with sequential logic, debounced inputs, and a 7-segment display output.',
    tech: ['Quartus Prime Lite', 'Digital Logic'],
  },
  {
    title: 'Portfolio Website',
    description: 'This site — a personal portfolio built to showcase my engineering projects and skills.',
    tech: ['React', 'Vite'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}
