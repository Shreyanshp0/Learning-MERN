import React from 'react'
import StudentMaks from './StudentMaks'
const Student = () => {
    const handleclick=()=>{
        alert("hello")
    }
    const handledblclick=()=>{
        alert("Clicked two times")
    }
  return (// only ui can be returned here no | if we try to return a js function it'll give error
    <div>
      <button onClick={handleclick}>Click me</button>
      <button onDoubleClick={handledblclick}>Double Click</button>
      <StudentMaks/>
    </div>
  )
}

export default Student
