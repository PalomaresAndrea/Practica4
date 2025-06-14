function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/inicio">✈️ Travel Explorer</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/inicio">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/destinos">Destinos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ofertas">Ofertas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/consejos">Consejos</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Más
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/experiencias">Experiencias</a></li>
                  <li><a className="dropdown-item" href="/blog">Blog de viajes</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/contacto">Contacto</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar destino..."
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
