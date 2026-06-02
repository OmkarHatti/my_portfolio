import { useNavbar } from '../hooks/useNavbar'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
  // { label: 'bottom', href: '#bottom' },
]

export default function Navbar() {
  const { scrolled, menuOpen, toggleMenu, closeMenu } = useNavbar()

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo">
          Omkar<span>Hatti</span>
        </a>
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          {navItems.map(item => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
