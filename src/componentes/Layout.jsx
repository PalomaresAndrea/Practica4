import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      {/* Encabezado */}
      <header style={{
        padding: '15px',
        backgroundColor: '#001f3f',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h2 style={{ margin: 0 }}>
          🌐 Travel Explorer
        </h2>
        <nav style={{ display: 'flex', gap: '15px' }}>
          <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Inicio</Link>
          <Link to="/destinos" style={{ color: '#ffffff', textDecoration: 'none' }}>Destinos</Link>
          <Link to="/ofertas" style={{ color: '#ffffff', textDecoration: 'none' }}>Ofertas</Link>
          <Link to="/consejos" style={{ color: '#ffffff', textDecoration: 'none' }}>Consejos</Link>
          <Link to="/acerca" style={{ color: '#ffffff', textDecoration: 'none' }}>Acerca de</Link>
        </nav>
      </header>

      {/* Contenido principal */}
      <main style={{ padding: '20px', backgroundColor: '#f8f9fa', minHeight: '80vh' }}>
        <Outlet />
      </main>

      {/* Pie de página */}
      <footer style={{
        padding: '10px',
        backgroundColor: '#001f3f',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <p>© 2025 Andrea Palomares – Travel Explorer. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;
