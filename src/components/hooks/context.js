import React, { createContext } from 'react'

const userContext = createContext({
    id: null,
    name: null,
    username: null,
    email: null,
});


function context() {
    const datos = {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      };
    
      const datosContext = useContext(userContext);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    userContext, 
    context
}