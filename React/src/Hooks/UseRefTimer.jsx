import React,{useRef, useState, useEffect} from 'react'

const UseRefTimer = () => {
    const time = useRef(null)
    const [timer, setTimer]=useState(0)
    const start=()=>{
        if(time.current === null){
            time.current=setInterval(()=>{
                setTimer(prev=>{
                    console.log(prev)
                    return prev+1})
                
            },1000)
            
        }
    }
    const stop=()=>{
        clearInterval(time.current)
        time.current=null
    }
    const reset=()=>{
        setTimer(0)
    }
    useEffect(() => {
        return () => clearInterval(time.current);
    }, []);
  return (
    <div>
        <h1>Timer: {timer}</h1>
        <button onClick={start}>Start Timer</button>
        <button onClick={stop}>Stop Timer</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default UseRefTimer
