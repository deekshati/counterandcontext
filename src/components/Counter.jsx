import React, { useContext } from "react";
import { ContextProvider, CounterContext } from "../context/context";
import { InputContext } from "../context/context";




function Counter() {
    const {counter,setCounter} = useContext(CounterContext);
    const {input1,setInput1,input2,setInput2}=useContext(InputContext);
  return (
    <div>

    <h1>{counter}</h1>
    <input value={input1} placeholder="0"
    onChange={(e)=>setInput1(e.target.value)}/>
    <button onClick={(e)=>{setCounter((prev)=>{ return prev+parseInt(input1)})}}>+</button>

    <input value={input2} placeholder="0"
    onChange={(e)=>setInput2(e.target.value)}/>
    <button onClick={(e)=>{setCounter((prev)=>{ return prev-parseInt(input2)})}}>-</button>
    
   
  </div>
  )
}

export default Counter