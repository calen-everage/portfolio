import aboutImg from '../assets/about.jpg'

const skills = ['C', 'C++', 'Python', 'LTspice', 'KiCad', 'Quartus Prime', 'MATLAB', 'PCB Design']

export default function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-layout">
        <div className="about-text">
          <p>
            I'm an undergraduate electrical engineering student at UC Davis focusing on analog
            circuit design and electronics. I also play guitar and produce music.
          </p>
          <p>
            My experience includes extensive laboratory-focused coursework in analog ciruit design, 
            electronic amplifier topologies, FPGA digital logic, analog and digital signal processing, 
            and power electronics.
          </p>
          <p>
            Check out my spotify page and reach out with any questions!
          </p>
          <div className="skills">
            <h3>Skills</h3>
            <ul className="skill-list">
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        </div>
        <img src={aboutImg} alt="Portrait photo" className="about-photo" />
      </div>
    </section>
  )
}
