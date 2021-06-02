import React,{useState, useEffect} from 'react';
import '../css/Buscador.css'
import llamarApi from '../../server/llamarApi'
import '../pages/Buscador'
import '../css/Gif.css'

export default function Buscador(){

    const [valor, valorActualizado] = useState([])
    const valorOne = (document.getElementById('valorOne') ||"").value ||"";

    useEffect(() => {
      llamarApi(valorOne).then(valor => valorActualizado(valor))
    })

    return (
        <>
            <section className="buscador">
                <form>
                    <p className="text">Escribe el gif que quiere buscar</p>
                    <input id="valorOne" className="input" type="text" placeholder="Escribe El Gif..."/> 
                </form>
            </section>
            <section className="contenedor-app">    
                {
                    valor.map(dosGif => {
                        return <div className="contenedor-img">
                                    <img className="img" src={dosGif.url} alt=""></img>
                                    <p className="title">{dosGif.title}</p>
                                </div>
                    })
                }
            </section>
        </>
    )
} 