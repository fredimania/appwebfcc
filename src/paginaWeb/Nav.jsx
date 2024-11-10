import React from 'react';
import { IoIosHome, IoIosConstruct, IoIosContact } from "react-icons/io";
import { Link } from 'react-router-dom';



function Nav() {
  return (
    <nav>
      <Link to="/"><IoIosHome /> Inicio</Link> - 
      <Link to="/servicios"><IoIosConstruct /> Servicios</Link> - 
      <Link to="/contacto"><IoIosContact /> Contacto</Link>
    </nav>
  );
}

export default Nav;