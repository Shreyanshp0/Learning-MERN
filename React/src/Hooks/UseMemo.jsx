import React, {useMemo, useState} from 'react'

const UseMemo = () => {
    const [count ,setCount]=useState(0)
    const [text, setText]=useState("")
    const double=useMemo(()=>{
        console.log("Double")
        return count*2
    },[count])
  return (
    <div>
        <h1>count:{count}</h1>
        <h1>Double: {double}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <input type="text" placeholder='Enter something' onChange={(e)=>setText(e.target.value)} />
        <h2>{text}</h2>
    </div>
  )
}

export default UseMemo
