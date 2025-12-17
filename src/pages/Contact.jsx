function Contact() {
  return (
    <section style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Contacto</h1>
      
      <form>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
          />
        </div>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
          />
        </div>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Mensaje
          </label>
          <textarea
            className="form-control"
            rows="5"
          ></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
          Enviar
        </button>
      </form>
    </section>
  )
}

export default Contact