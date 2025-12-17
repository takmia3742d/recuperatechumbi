import { useEffect } from 'react'
import { useProductStore } from '../store/store'
import CardList from '../components/CardList'

function Home() {
  const { products, fetchProducts } = useProductStore()

  useEffect(() => {
    fetchProducts(1)
  }, [fetchProducts])

  const initialProducts = products.slice(0, 6)

  return (
    <section>
      <div style={{ backgroundColor: '#007bff', color: 'white', padding: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>DummyShop</h1>
        <p style={{ fontSize: '1.1rem' }}>pagina de producos </p>
      </div>
      
      <div>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.8rem' }}>Productos Destacados</h2>
        <CardList products={initialProducts} />
      </div>
    </section>
  )
}

export default Home