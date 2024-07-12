import { createContext, useState } from "react";
import React from "react";


export const CounterContext=createContext();
export const InputContext = createContext();



export const ContextProvider= ({children}) => {
    const [counter,setCounter] = useState(0);
  return(  
    <CounterContext.Provider value={{counter,setCounter}}>
        {children}
    </CounterContext.Provider>
  )

}

export const InputProvider = ({children}) =>{
    const [input,setInput]=useState("")
    return (
    <InputContext.Provider value={{input,setInput}}>
    {children}
    </InputContext.Provider>
    )
}