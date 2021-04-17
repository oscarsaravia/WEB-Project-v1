/* eslint-disable linebreak-style */
import React from 'react'
import fotomasa from './images/masa.jpg'
import fotoqueso from './images/queso.jpg'
import fotosalsa from './images/salsa.jpg'
import fotovegetales from './images/vegetales.jpg'
import fotocarnes from './images/carnes.jpg'
import './ingredientes-style.css'

const Ingredientes = () => (
  <div className="seccion_ingredientes">
    <div className="contenedor">
      <div className="content-title">
        <div className="titulo">
          Cumpliendo nuestro compromiso de calidad, nuestros ingredientes son siempre frescos.
        </div>
      </div>
    </div>
    <div className="contenedor-ingredientes">
      <div className="masa">
        <img src={fotomasa} alt="Masa" className="masaimg" />
      </div>
      <div className="cuadros">
        <div className="cuadro">
          <img src={fotoqueso} alt="Queso" className="fotocuadro" />
        </div>
        <div className="cuadro">
          <img src={fotosalsa} alt="Salsa" className="fotocuadro" />
        </div>
        <div className="cuadro">
          <img src={fotovegetales} alt="Vegetales" className="fotocuadro" />
        </div>
        <div className="cuadro">
          <img src={fotocarnes} alt="Carnes" className="fotocuadro" />
        </div>
      </div>
    </div>
  </div>
)

export default Ingredientes
