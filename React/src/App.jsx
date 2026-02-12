import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import UseLayout from './UseLayout'
import UseSearchParams from './Hooks/UseSearchParams'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,reset } from './CounterSlice'
const App = () => {
  const count=useSelector((state)=>state.counter.value)
  const disPatch= useDispatch()
  return (

    
    <BrowserRouter>
      <h1>{count}</h1>
      <button onClick={()=>{disPatch(increment())}}>Inc</button>
      <button onClick={()=>{disPatch(decrement())}}>Dec</button>
      <button onClick={()=>{disPatch(reset())}}>Reset</button>
      <UseLayout />
      <UseSearchParams />
    </BrowserRouter>
  )
}

export default App
