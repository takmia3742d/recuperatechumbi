import Card from './Card'

function CardList({ products }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem', padding: '1rem' }}>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}

export default CardList