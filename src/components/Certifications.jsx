const certs = [
  
  {
    type: 'img',
    src: '/google1.png',
    title: 'google Data Analyst Certified',
    lines: ['Google Cloud Platform', 'Issued: March 2022'],
    link: { href: 'Coursera 1 certificate.pdf', label: 'Google Data Analyst' },
  },
  {
    type: 'img',
    src: '/python.png',
    title: 'Python for Everybody',
    lines: ['Coursera', 'Issued: May 2024'],
  },
  {
    type: 'img',
    src: '/sql.png',
    title: 'MySQL',
    lines: ['Coursera', 'Issued: May 2024'],
  },
  {
    type: 'img',
    src: '/html5.png',
    title: 'HTML5 Certified',
    lines: ['Meta', 'Issued: January 2022'],
  },
  {
    type: 'icon',
    title: 'PowerBi Certified',
    lines: ['google Data Analyst Certified', 'HTML5 Certified'],
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certs.map((cert, i) => (
            <div className="cert-card fade-in" key={i}>
              <div className="cert-img">
                {cert.type === 'img'
                  ? <img src={cert.src} alt="Certificate" />
                  : <i className="fas fa-award"></i>
                }
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                {cert.lines.map((line, j) => <p key={j}>{line}</p>)}
                {cert.link && (
                  <a href={cert.link.href} target="_blank" rel="noreferrer">
                    {cert.link.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
