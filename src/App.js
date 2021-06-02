import React from 'react';
import {  Link,  Route } from 'wouter'
import Buscador from './components/pages/Buscador'
import './app.css'

function App() {
  return (
    <div className="App">
      <Link className="btnBuscador" to="/Buscador">Buscador</Link>
      <Route path="/Buscador" component={Buscador}/>
    </div>
  ); 
}

export default App;