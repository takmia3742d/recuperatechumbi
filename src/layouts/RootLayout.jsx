import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function RootLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout