/* eslint-disable linebreak-style */
import React from 'react'
import './medidas-style.css'
import lava from './images/lava.png'
import mascarilla from './images/masca.png'
import spray from './images/alc.png'
import distancia from './images/dist.png'

const Medidas = () => (
  <div className="medidas">
    <div className="contenedor">
      <div className="texto-medidas">
        medidas adoptadas en el interior de nuestras sucursales
      </div>
      <div className="columna">
        <img src={lava} alt="" />
        <div className="desc">
          lavado de manos
        </div>
      </div>
      <div className="columna">
        <img src={mascarilla} alt="" />
        <div className="desc">
          uso de mascarilla
        </div>
      </div>
      <div className="columna">
        <img src={spray} alt="" />
        <div className="desc">
          medidas de higiene
          <br />
          y desinfeccion
        </div>
      </div>
      <div className="columna">
        <img src={distancia} alt="" />
        <div className="desc">
          distancia de 2 metros
          <br />
          entre cada miembro de
          <br />
          nuestro equipo
        </div>
      </div>
    </div>
  </div>
)

export default Medidas
