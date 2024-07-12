import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ContextProvider, InputProvider } from './context/context';
import Counter from './components/Counter';

function App() {
  

  return (
    <InputProvider>
    <ContextProvider>
     <Counter />
    </ContextProvider>
    </InputProvider>
  )
}

export default App
