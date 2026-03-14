import { Link } from 'react-router-dom';

function PaginaInexistente() {
  return (
    <div>
        <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>404 - Página no encontrada</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <Link to="/">Volver al Inicio</Link>
    </div>
    </div>
  )
}

export default PaginaInexistente