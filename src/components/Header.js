import React from 'react';

import logo from '../assets/logo-facebook.png';

function Header() {
  return (
    <header>
      <div className='header-content'>
        <img src={logo} />
        <span>Meu perfil</span>
          <i class="material-icons">account_circle</i>
      </div>
    </header>
  );
}

export default Header;