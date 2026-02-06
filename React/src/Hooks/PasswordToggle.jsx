import React,{useState} from 'react'

const PasswordToggle = () => {
    const [showPassword, setShowPassword]=useState(false)
    const [inputPassword, setinputPassword]=useState("")
  return (
    <div>
        <input type={showPassword?"text":"password"} value={inputPassword} onChange={(e)=>{setinputPassword(e.target.value)}}  />
        <button onClick={()=>setShowPassword(!showPassword)}> {showPassword?"Hide":"Show"} </button>
    </div>
  )
}

export default PasswordToggle
