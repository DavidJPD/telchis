import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/inicio">Inicio</Link>
        </li>
        <li>
          <Link to="/contactos">Contacto</Link>
        </li>
        <li>
          <Link to="/planes">Planes</Link>
        </li>
        <li>
          <Link to="/servicios">Servicios</Link>
        </li>
        <li>
          <Link to="/serviceForm">Formulario</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;