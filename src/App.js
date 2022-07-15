/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */

import React, { createContext, useContext, useEffect, useState } from "react";
import Inicio from "./components/pages/inicio.jsx";
import "./app.css";

function App() {
  const datos = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  };
  const userContext = createContext({
    id: null,
    name: null,
    username: null,
    email: null,
  });
  const datosContext = useContext(userContext);

  return (
    <userContext.Provider value={datos}>
    <div className="App">
      <Inicio> </Inicio>
    </div>
    </userContext.Provider>
  );
}

export default App;
