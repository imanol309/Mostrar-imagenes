import React from 'react';
// import {  Link,  Route } from 'wouter'
// import Buscador from './components/pages/Buscador'
import Inicio from './components/pages/inicio.jsx'
import './app.css'

function App() {
  return (
    <div className="App">
      <Inicio></Inicio>
      {/* <Link className="btnBuscador" to="/Buscador">Buscador</Link> */}
      {/* <Link className="btnBuscador Inicio" to="/Inicio">Inicio</Link> */}
      {/* <Route path="/Buscador" component={Buscador}/> */}
      {/* <Route path="/Inicio" component={Inicio}/> */}
    </div>
  ); 
}

export default App;