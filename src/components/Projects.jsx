const projects = [
  {
    icon: 'fas fa-chart-line',
    title: 'ImageGeoLocator 🌍',
    desc: 'A comprehensive financial analytics dashboard with real-time data visualization and reporting features.',
    tags: ['React', 'D3.js', 'Node.js'],
    link: 'https://image-geo-locate.vercel.app/',
  },
  {
    icon: 'fas fa-shopping-cart',
    title: 'E-Commerce Platform',
    desc: 'Full-featured online store with product catalog, shopping cart, and secure payment processing.',
    tags: ['Vue.js', 'Firebase', 'Stripe API'],
    link: '#',
  },
  {
    icon: 'fas fa-tasks',
    title: 'Task Management App',
    desc: 'Collaborative project management tool with real-time updates, team collaboration, and progress tracking.',
    tags: ['React', 'Socket.io', 'MongoDB'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card fade-in" key={project.title}>
              <div className="project-img">
                <i className={project.icon}></i>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="btn" target={project.link !== '#' ? '_blank' : undefined} rel="noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
