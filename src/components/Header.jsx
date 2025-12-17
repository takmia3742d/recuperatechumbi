import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={{ backgroundColor: '#222', padding: '1rem', marginBottom: '2rem' }}>
      <nav style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#278b9fff', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none' }}>
          DummyShop
        </Link>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0 }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/entities" style={{ color: 'white', textDecoration: 'none' }}>Productos</Link></li>
          <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header