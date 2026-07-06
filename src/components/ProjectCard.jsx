import { Link } from 'react-router-dom'

export default function ProjectCard({ title, description, tech, path, liveUrl, repoUrl }) {
  return (
    <Link to={path} className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="tech-list">
        {tech.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <div className="card-links">
        {liveUrl && <a href={liveUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>Live</a>}
        {repoUrl && <a href={repoUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>GitHub</a>}
      </div>
    </Link>
  )
}
