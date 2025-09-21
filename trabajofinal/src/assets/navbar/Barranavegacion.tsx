
import '../navbar/barranavegacion.css';
import React from 'react';

const BarraNavegacion: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (<>
    <nav className="navbar">
     {children}
     </nav>
        
  </>);};
export default BarraNavegacion; 