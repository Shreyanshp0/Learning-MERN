import React, { useEffect, useState } from 'react'
const State = () => {
    const [count, setCount] = useState(0)
    const [type, setType] = useState("")
    const [quantity, setQuantity]=useState(1)
    useEffect(()=>{
            if(count%2==0) setType("Even")
            else setType("Odd")
    },[count])

    const price=300 * quantity
    const increase=()=>{
        if(count%2==0) setCount(count+2)
        else setCount(count+1)
        console.log("Quantity Updated")
    }
    const decrease=()=>{
        if(quantity >0){
            setQuantity(quantity-1)
        }
    }
    const cd=()=>{
        if(count >0){
            setCount(count-1)
        }
    }
    const reset=()=>{
            setCount(0)
        
    }
    const quani=()=>{setQuantity(quantity+1)}

    

    useEffect(()=>{
        if(quantity==5) {setQuantity(quantity-5)}
    },[quantity])
  return (
    <div>
        <button onClick={increase}>Inc</button>
        <button onClick={cd}>Dec</button>
        <button onClick={reset}>Reset</button>
        <h1>{count}</h1>
        <h1> Type:{type}</h1>
        <button onClick={quani}>Increase Value</button>
        <button onClick={decrease}>Decrease Value</button>
        <h1>Quantity: {quantity}</h1>
        <h1>Price:{price}</h1>
    </div>
  )
}

export default State
