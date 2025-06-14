import NavBar from './NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h2>✈️ Bienvenido a la Página de Viajes y Turismo 🌍</h2>
        <hr />
        <p>
          Esta aplicación está diseñada para los amantes de los viajes. Aquí podrás encontrar información sobre:
        </p>
        <ul>
          <li>Destinos populares alrededor del mundo</li>
          <li>Consejos de viaje y planificación</li>
          <li>Ofertas y paquetes turísticos</li>
          <li>Experiencias y reseñas de viajeros</li>
        </ul>
        <p>
          ¡Explora nuevos lugares y prepárate para tu próxima aventura!
        </p>
      </div>
    </>
  );
}

export default App;
