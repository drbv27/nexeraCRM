import React from 'react';
import './navbarstyles.css'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      {/* Elementos específicos del administrador */}
      <ul>
        <li>Usuarios</li>
        <li>Configuración</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
