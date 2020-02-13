import * as React from 'react';

import { NavBar, ToHome } from './styledComponents';

function Header() {
  return (
    <NavBar>
      <p>Prueba</p>
      <ToHome to="/">LISTA DE ARTISTAS</ToHome>
    </NavBar>
  );
}

export default Header;
