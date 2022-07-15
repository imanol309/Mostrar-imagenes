/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */

import React, { createContext, useContext, useEffect, useState } from "react";
import Inicio from "./components/pages/inicio.jsx";
import "./app.css";

function App() {


  return (
    <userContext.Provider value={datos}>
    <div className="App">
      <Inicio> </Inicio>
    </div>
    </userContext.Provider>
  );
}

export default App;
