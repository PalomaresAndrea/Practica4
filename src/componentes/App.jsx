import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import NavBar from './NavBar';

function Home() {
  return (
    <>
      <NavBar />
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h2>✈️ Bienvenido a la Página de Viajes y Turismo de Andrea Palomares 🌍</h2>
        <hr />
        <p>Esta aplicación está diseñada para los amantes de los viajes. Aquí podrás encontrar información sobre:</p>
        <ul>
          <li>Destinos populares alrededor del mundo</li>
          <li>Consejos de viaje y planificación</li>
          <li>Ofertas y paquetes turísticos</li>
          <li>Experiencias y reseñas de viajeros</li>
        </ul>
        <p>¡Explora nuevos lugares y prepárate para tu próxima aventura!</p>
      </div>
    </>
  );
}

function About() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Acerca de Nosotros</h2>
      <p>Somos una comunidad apasionada por los viajes y el turismo. Nuestra misión es ayudarte a descubrir el mundo con recomendaciones útiles y experiencias inolvidables.</p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
