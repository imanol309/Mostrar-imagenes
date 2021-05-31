import React,{useState, useEffect}from 'react';
import llamarApi from './server/llamarApi'
import './app.css'

function App() {
  const [valor, valorActualizado] = useState([])
  const valorOne = (document.getElementById('valorOne') ||"").value ||"";

  useEffect(() => {
    llamarApi(valorOne).then(valor => valorActualizado(valor))
  })

  return (
    <div className="App">
      <section className="buscador">
        <p className="text">Escribe el gif que quiere buscar</p>
        <input id="valorOne" className="input" type="text" placeholder="gifs"/> <br/>
        <br/>
        <button className="btn">Buscar</button>
      </section>
       <section className="contenedor-app">
            {
              valor.map(dosGif => <img className="img" src={dosGif} alt="" />)
            }
       </section>
    </div>
  );
}

export default App;