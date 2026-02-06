import React, { useRef, useState } from 'react'

const Useref = () => {
  const ref = useRef(0)
  const [count , setCount] = useState(0)
  return (
    <div className="center-ui">
      <div>
        <h1>{count}</h1>
        <button onClick={() => {
          ref.current++
          console.log(ref.current)
          setCount(prev => prev + 1)
        }}>
          Click
        </button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
      </div>
    </div>
  )
}

export default Useref
