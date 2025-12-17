import { useEffect } from 'react'
import { useProductStore } from '../store/store'
import CardList from '../components/CardList'

function Entities() {
  const { products, currentPage, totalPages, loading, fetchProducts } = useProductStore()

  useEffect(() => {
    fetchProducts(1)
  }, [fetchProducts])

  const handlePrev = () => {
    if (currentPage > 1) {
      fetchProducts(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      fetchProducts(currentPage + 1)
    }
  }

  return (
    <section>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Todos los Productos</h1>
      
      {loading ? (
        <p style={{ textAlign: 'center' }}>Cargando...</p>
      ) : (
        <>
          <CardList products={products} />
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2rem 0', alignItems: 'center' }}>
            <button 
              onClick={handlePrev} 
              disabled={currentPage === 1}
              className="btn btn-primary"
            >
              Anterior
            </button>
            <span>Página {currentPage} de {totalPages}</span>
            <button 
              onClick={handleNext} 
              disabled={currentPage === totalPages}
              className="btn btn-primary"
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </section>
  )
}

export default Entities