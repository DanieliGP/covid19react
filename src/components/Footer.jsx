import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const checkActive = ({ isActive }) => (isActive ? 'activo' : '');

  return (
    <footer>
      <nav>
        <NavLink to="/" end className={checkActive}>Inicio</NavLink>
        <NavLink to="/noticias" className={checkActive}>Noticias</NavLink>
        <NavLink to="/mortandad" className={checkActive}>Mortandad</NavLink>
      </nav>

      <section>
        <img src="img/propagandaFooter.png" alt="Publicidad" />
      </section>

      <p>&copy; 2025 Información del Coronavirus. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;