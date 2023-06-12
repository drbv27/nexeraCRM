import React from 'react';
import Logo from '../../assets/img/NexeraAdvisors-logo.png'

const Navbar = () => {
  return (
    <nav>
      {/* Botones comunes */}
      <div>
        <img src={Logo} alt="" />
      </div>
      <button>Mi Perfil</button>
      {/* Renderizar otros botones según el tipo de usuario */}
    </nav>
  );
};

export default Navbar;
