import React from 'react';
import Gif from './components/Gif'
import Buscador from './components/Buscador'
import './app.css'

function App() {
  return (
    <div className="App">
      <Buscador/>
      <Gif/> 
    </div>
  ); 
}

export default App;