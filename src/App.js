import React from 'react';
import {  Link,  Route } from 'wouter'
import Gif from './components/Gif'
import Buscador from './components/Buscador'
import './app.css'

function App() {
  return (
    <div className="App">
      <Link className="btnBuscador" to="/Buscador">Buscador</Link>
      <Route path="/Buscador" component={Buscador}/>
      <Gif/> 
    </div>
  ); 
}

export default App;