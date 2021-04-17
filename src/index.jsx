/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-undef */

import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'
import Ingredientes from './components/Ingredientes'
import Medidas from './components/Medidas'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import './appstyle.css'
import { SliderData } from './components/SliderData'

const App = () => (
  <div className="principal">
    <NavBar />
    <div className="main_principal">
      <Carousel slides={SliderData} />
      <Ingredientes />
      <Medidas />
      <Footer />
    </div>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
