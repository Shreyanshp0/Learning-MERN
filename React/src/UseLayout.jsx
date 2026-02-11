import React, { use, useEffect, useLayoutEffect, useState } from 'react'

const UseLayout = () => {
    const [number, setNumber] = useState(0)
    useEffect(()=>{
        console.log("useEffect " + number);
    },[number])
    useLayoutEffect(()=>{
        console.log("useLayoutEffect " + number);
    },[number])
  return (
    <div>
        <h1>Number: {number}</h1>
      <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
    </div>
  )
}

export default UseLayout
