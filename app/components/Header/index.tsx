import * as React from 'react';

import { NavBar, ContentNav } from './styledComponents';

function Header() {
  return (
    <ContentNav>
      <NavBar>
        <p>Prueba</p>
        <p className="text2">LISTA DE ARTISTAS</p>
      </NavBar>
    </ContentNav>
  );
}

export default Header;
