
import '../navbar/barranavegacion.css';
import React from 'react';

const BarraNavegacion: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (<>
    <nav className="navbar">
      <ul className="nav-links">
     {children}
     </ul>
     </nav>
        
  </>);};
export default BarraNavegacion; 