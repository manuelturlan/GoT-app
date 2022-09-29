import React from "react";
import { Link } from "react-router-dom";

const Nav = ( props ) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/house/create">Create House</Link>
        </li>
        {/* <li>Crear nueva "House"</li> */}
      </ul>
    </nav>
  );
};

export default Nav;