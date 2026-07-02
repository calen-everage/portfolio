const skills = ['C', 'C++', 'Python', 'LTspice', 'KiCad', 'Quartus Prime', 'MATLAB', 'PCB Design']

export default function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I'm a Bachelor of Science in Electrical Engineering student at UC Davis,
        focused on electronic circuit design.
      </p>
      <p>
        I design and simulate analog circuits, build digital logic systems on FPGAs,
        and prototype PCBs for Cyclone Robosub, our autonomous underwater vehicle team.
      </p>
      <div className="skills">
        <h3>Skills</h3>
        <ul className="skill-list">
          {skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    </section>
  )
}
