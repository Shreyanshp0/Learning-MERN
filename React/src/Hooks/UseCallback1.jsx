import React from 'react'

const UseCallback1 = React.memo(({handleClick}) => {
    console.log("Child Clicked ")
  return (
    <div>
      <button onClick={handleClick}>Click me (Child)</button>
      {/* <p>{count}</p> */}
    </div>
  )
})

export default UseCallback1
