import React, { useEffect, useRef, useState } from "react";
import "./navBar.css";
export default function NavBar() {
  // const valorSelecionado = 0;
  const h4RefOne = useRef();
  const h4RefTwo = useRef();
  const h4RefThree = useRef();
  const [valor, setValor] = useState(0);

  function cambiarValor(evento, ref) {
    setValor(evento);
    console.log(ref.current);
  }

  useEffect(() => {
    setValor(valor + 1);
  }, []);

  return (
    <div>
      <div className="containerNavBar">
        <div>
          <h4 valor="1" onClick={() => cambiarValor(1, h4RefOne)} ref={h4RefOne}>Valor Numero 1</h4>
          <h4 valor="2" onClick={() => cambiarValor(2, h4RefTwo)} ref={h4RefTwo}>
            Valor Numero 2
          </h4>
          <h4 valor="3" onClick={() => cambiarValor(3, h4RefThree)} ref={h4RefThree}>
            Valor Numero 3
          </h4>
        </div>
        <div>
          {setValor && <h4>Estes es valor que selecionaste {valor}</h4>}
        </div>
      </div>
    </div>
  );
}
