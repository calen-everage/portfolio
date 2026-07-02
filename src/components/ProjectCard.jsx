export default function ProjectCard({ title, description, tech, liveUrl, repoUrl }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="tech-list">
        {tech.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <div className="card-links">
        {liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer">Live</a>}
        {repoUrl && <a href={repoUrl} target="_blank" rel="noreferrer">GitHub</a>}
      </div>
    </div>
  )
}
