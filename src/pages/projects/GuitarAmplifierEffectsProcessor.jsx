import { Link } from 'react-router-dom'

export default function GuitarAmplifierEffectsProcessor() {
  return (
    <section className="project-page">
      <Link to="/#projects" className="project-back-link">&larr; Back to Projects</Link>
      <h2>Guitar Amplifier and Effects Processor</h2>

      <div className="project-page-images">
        {/* TODO: add project images */}
      </div>

      <div className="project-page-text">
        {/* TODO: add project write-up */}
      </div>

      <div className="project-page-audio">
        {/* TODO: embed .wav audio clips */}
      </div>

      <div className="project-page-links">
        {/* TODO: add links (schematics, repo, datasheets, etc.) */}
      </div>
    </section>
  )
}
