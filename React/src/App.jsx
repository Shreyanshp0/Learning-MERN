import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import UseLayout from './UseLayout'
import UseSearchParams from './Hooks/UseSearchParams'

const App = () => {
  return (
    <BrowserRouter>
      <UseLayout />
      <UseSearchParams />
    </BrowserRouter>
  )
}

export default App
