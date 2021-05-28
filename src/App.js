import React,{useState}from 'react';
import './app.css'

const gif = ['https://media3.giphy.com/media/LMrQR7qJXg0UoMquoI/giphy.gif',
'https://media1.giphy.com/media/5SAPzzr9MUdpW1jXQA/giphy.gif?cid=ecf05e473qeo4rbtgvp18a241kvj43o8r0fsij6wrddgp33j&rid=giphy.gif&ct=g']

const gifActualizando = ["https://media1.giphy.com/media/PWVDv5lvxJc40KCLK5/giphy.gif?cid=ecf05e47pksobct3r2wrb69opzs3du8unyoakeonwpvwafa8&rid=giphy.gif&ct=g"]

function App() {

  const [valor, valorActualizado] = useState(gif)

  return (
    <div className="App">
       <section className="contenedor-app">
         {
           valor.map(dosGif => <img src={dosGif} alt="" />)
         }
       </section>
       <button onClick={() => valorActualizado(gifActualizando)}>
          Cambiar Nuevo
        </button>
    </div>
  );
}

export default App;