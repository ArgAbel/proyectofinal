import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BarraNavegacion from '../src/assets/navbar/Barranavegacion.tsx'
import BotonNav from '../src/assets/botonnav/BotonNav.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <BarraNavegacion>
     <BotonNav nombre="Inicio" />
     <BotonNav nombre="intereses"/> 
     <BotonNav nombre="Servicios"/>
     <BotonNav nombre="contacto"/> 
     </BarraNavegacion>  
    </StrictMode>
)
