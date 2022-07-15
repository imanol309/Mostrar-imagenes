import React from 'react'
import NavBar from '../componetsGlobal/navBar'
import app from '../../App.js'
export default function Inicio() {
  const datos = app.datosContext()
  // const datos = JSON.stringify(Datos)
  console.log(datos)
  return (
    <div>
      <div>
        <h4>Este es el name datos </h4>
      </div>
      <NavBar>
      </NavBar>
    </div>
  )
}
