export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-img fade-in">
            <img src="omk.png" alt="My Image" />
          </div>
          <div className="about-text fade-in">
            <h3>Hello! I'm Omkar</h3>
            <p>
              Aspiring Data Analyst skilled in SQL, Power BI, Tableau, and
              Python. Currently pursuing MCA with a strong foundation in
              database management and data visualization.
            </p>
            <p>
              Passionate about turning data into insights through clean visuals
              and analysis. Building projects to develop real-world
              problem-solving skills in analytics. Eager to grow and explore
              opportunities in data-driven roles and impactful business
              solutions.
            </p>
            <a href="#contact" className="btn">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
