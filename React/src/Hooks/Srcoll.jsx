import React, { useRef } from 'react'

const Srcoll = () => {
  const contactRef = useRef(null)
  const scroll = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div>
      <button onClick={scroll}>contact us</button>

      <div style={{ height: '150vh', paddingTop: '20px' }}>
        <h2>Scroll down to see the contact form...</h2>
      </div>

      <h1 ref={contactRef} >Contact Form</h1>
    </div>
  )
}

export default Srcoll
