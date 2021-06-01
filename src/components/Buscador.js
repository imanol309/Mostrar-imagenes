import React from 'react';
import '../app.css'

export default function Buscador(props){
    return (
        <section className="buscador">
            <p className="text">Escribe el gif que quiere buscar</p>
            <input id="valorOne" className="input" type="text" placeholder="gifs"/> 
            <br/>
            <br/>
            <button onclick={() =>{
                
            }} id='btn'>Buscar</button>
        </section>
    )
}