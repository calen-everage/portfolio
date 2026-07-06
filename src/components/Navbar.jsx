import { Link } from 'react-router-dom'

const projectLinks = [
  { title: 'Guitar Amplifier and Effects Processor', path: '/projects/guitar-amplifier-effects-processor' },
]

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Calen Everage</Link>
      <ul className="nav-links">
        <li><Link to="/#hero">Home</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li className="nav-dropdown">
          <Link to="/#projects">Projects</Link>
          <ul className="nav-dropdown-menu">
            {projectLinks.map((p) => (
              <li key={p.path}><Link to={p.path}>{p.title}</Link></li>
            ))}
          </ul>
        </li>
        <li><Link to="/#music">Music</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
