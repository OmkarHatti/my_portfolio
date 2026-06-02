const skills = [
  { icon: 'fa-brands fa-python', name: 'Python', desc: 'Proficient in python', level: 95 },
  { icon: 'fa-regular fa-file-excel', name: 'Excel', desc: 'Microsoft Excel', level: 85 },
  { icon: 'fas fa-database', name: 'Database', desc: 'MySQL, PostgreSQL', level: 75 },
  { icon: 'fa-brands fa-java', name: 'Java', desc: 'intermediate in java', level: 85 },
  { icon: 'fa-brands fa-html5', name: 'HTML', desc: 'Proficiant in HTML', level: 80 },
  { icon: 'fa-brands fa-css3-alt', name: 'CSS', desc: 'Proficiant in CSS', level: 70 },
  { icon: 'fa-brands fa-js', name: 'JS', desc: 'Proficiant in JS', level: 80 },
  { icon: 'fas fa-database', name: 'PowerBI', desc: 'Good In Data Visualization', level: 90 },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map(skill => (
            <div className="skill-card fade-in" key={skill.name}>
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.name}</h3>
              <p>{skill.desc}</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
