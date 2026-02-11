import React, {useCallback, useState} from 'react'
import UseCallback1 from './UseCallback1'

const UseCallBack = () => {
    const [count, setCount] = useState(0)
    const handleclick=useCallback(()=>{
        console.log("Button Clicked")
        setCount(count+1)
    }, [])
  return (
    <div>
      <button onClick={handleclick}>Click me</button>
      <p>Count: {count}</p>
      <UseCallback1 handleClick={handleclick}/>
    </div>
  )
}

export default UseCallBack
