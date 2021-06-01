import React,{useState, useEffect}from 'react';
import llamarApi from '../server/llamarApi'
import './Buscador'
import '../app.css'
import './Gif.css'

export default function Gif(){

    const [valor, valorActualizado] = useState([])
    const valorOne = (document.getElementById('valorOne') ||"").value ||"";
  
    useEffect(() => {
      llamarApi(valorOne).then(valor => valorActualizado(valor))
    })
  
    return (   
    <section className="contenedor-app">    
        {
            valor.map(dosGif => {
                return <div>
                            <p className="title">{dosGif.title}</p>
                            <img className="img" src={dosGif.url} alt=""/>
                        </div>
            })
        }
    </section> )
}      