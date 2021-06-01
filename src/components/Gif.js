import React,{useState, useEffect}from 'react';
import llamarApi from '../server/llamarApi'
import './Buscador'
import '../app.css'
import './Gif.css'

export default function Gif(){

    const [valor, valorActualizado] = useState((document.getElementById('valorOne') ||"").value ||"")
    
    // const valorOne = ;
    const btn = (document.getElementById('btn') ||"")

    btn.addEventListener('click', () =>{
        valorActualizado((document.getElementById('valorOne') ||"").value ||"")
    })

    useEffect(() => {
        llamarApi(valor).then(valor => valorActualizado(valor))
    },[valor])

  
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