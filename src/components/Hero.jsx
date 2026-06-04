export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>

      <div className="container">
        <div className="hero-content fade-in">
          <h1>Omkar Hatti</h1>
          <h2>Data Analytics Enthusiast</h2>

          <p>
            Transforming data into actionable insights through analytics,
            machine learning, and data-driven problem solving.
          </p>

          <div className="hero-buttons">
            <a
              href="public/Omkar_Hatti_Resume (1).pdf"
              className="btn btn-secondary"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}