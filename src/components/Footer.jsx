/* eslint-disable linebreak-style */
import React from 'react'
import fb from './images/fb.png'
import insta from './images/insta.png'
import uber from './images/uber.png'
import glovo from './images/globo.png'
import hugo from './images/hugo.png'
import './footer-style.css'

const Footer = () => (
  <footer className="foo">
    <div className="contenido">
      <div className="redes">
        <a href="https://www.facebook.com/LittleCaesarsGuatemala/" className="icono-redes">
          <img src={fb} alt="facebook" className="ico" />
        </a>
        <a href="https://www.instagram.com/littlecaesarsgt/" className="icono-redes">
          <img src={insta} alt="instagram" className="ico" />
        </a>
      </div>
      <div className="domicilio">
        <div className="contenido-domicilio">
          <div className="txt-ordernar">Ordena a domicilio</div>
          <a href="# " className="domicilio-ico">
            <img src={uber} alt="uber" className="ico" />
          </a>
          <a href="# " className="domicilio-ico">
            <img src={hugo} alt="hugo" className="ico" />
          </a>
          <a href="# " className="domicilio-ico">
            <img src={glovo} alt="glovo" className="ico" />
          </a>
        </div>
      </div>
    </div>
    <div className="derechos">
      <div className="derechostxt">
        ©2013-2020 Little Caesar Enterprises, Inc. Todos los derechos Reservados. El nombre, los
        logotipos y las marcas relacionadas con Little Caesars® Pizza son marcas registradas de
        Little Caesar Enterprises, Inc.
      </div>
    </div>
  </footer>
)

export default Footer
