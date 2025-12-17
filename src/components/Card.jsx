function Card({ product }) {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      padding: '1rem', 
      textAlign: 'center',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img 
        src={product.thumbnail} 
        alt={product.title} 
        style={{ 
          width: '100%', 
          height: '180px', 
          objectFit: 'cover',
          borderRadius: '6px',
          marginBottom: '0.5rem'
        }} 
      />
      <h3 style={{ 
        marginTop: '0.5rem', 
        fontSize: '1rem',
        marginBottom: '0.3rem',
        height: '2.5rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>
        {product.title}
      </h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
        <p style={{ 
          color: '#e74c3c', 
          fontSize: '1.1rem',
          fontWeight: 'bold',
          margin: 0
        }}>
          ${product.price}
        </p>
        <p style={{ 
          color: '#f39c12', 
          fontSize: '0.9rem',
          margin: 0
        }}>
           {product.rating}
        </p>
      </div>
    </div>
  )
}

export default Card