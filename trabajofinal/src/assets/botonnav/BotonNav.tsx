import './botonnav.css'
import React from 'react';

type BotonNavProps={
  nombre: string;
}
const BotonNav: React.FC<BotonNavProps> = ({ nombre }) => { 
return(<a className="button" href="#">
    <span></span>
    <span></span>
    <span></span>
    <span></span> 
    {nombre}
  </a>)}
  export default BotonNav;