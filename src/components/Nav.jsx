import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const checkActive = ({ isActive }) => (isActive ? 'activo' : '');

  return (
    <nav>
      <NavLink to="/" end className={checkActive}>Inicio</NavLink>
      <NavLink to="/noticias" className={checkActive}>Noticias</NavLink>
      <NavLink to="/mortandad" className={checkActive}>Mortandad</NavLink>
    </nav>
  );
}

export default Nav;