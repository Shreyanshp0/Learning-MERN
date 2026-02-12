import React from 'react'
import StudentMaks from './StudentMaks'
const Student = () => {
    const handleclick=()=>{
        alert("hello")
    }
    const handledblclick=()=>{
        alert("Clicked two times")
    }
  return (
    <div>
      <button onClick={handleclick}>Click me</button>
      <button onDoubleClick={handledblclick}>Double Click</button>
      <StudentMaks/>
    </div>
  )
}

export default Student
