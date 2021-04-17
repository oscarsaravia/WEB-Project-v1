/* eslint-disable linebreak-style */
import React from 'react'
import './navstyle.css'
import logo from './images/logo.jpg'
import bandera from './images/bandera.png'

const NavBar = () => (
  <header className="encabezado">
    <div className="centro">
      <div className="bloquearriba">
        <a href="https://pizzapizza.com.gt" className="logo">
          <img src={logo} alt="logo" loading="lazy" />
        </a>
        <div className="bloquepais">
          <div className="pais">GUATEMALA</div>
          <img className="bandera" src={bandera} alt="bandera" loading="lazy" />
        </div>
      </div>
      <div className="bloqueabajo">
        <div className="contenedorabajo">
          <nav className="centralmenu">
            <a href="https://pizzapizza.com.gt" className="link">INICIO</a>
            <a href="https://pizzapizza.com.gt/menu" className="link">MENÚ</a>
            <a href="https://pizzapizza.com.gt/acerca-de-nosotros" className="link">ACERCA DE NOSOTROS</a>
            <a href="https://pizzapizza.com.gt/ubicaciones" className="link">UBICACIONES</a>
            <a href="# " className="ordenar">ORDENA AQUI</a>
          </nav>
        </div>
      </div>
    </div>
  </header>
)
export default NavBar
