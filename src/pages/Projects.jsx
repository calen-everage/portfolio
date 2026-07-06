import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Guitar Amplifier and Effects Processor',
    description: 'Designed and simulated a guitar signal limiter, overdrive distortion, and active low-pass filter using op-amps and MOSFETs, with a regulated DC power supply.',
    tech: ['LTspice', 'Analog Design'],
    path: '/projects/guitar-amplifier-effects-processor',
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
