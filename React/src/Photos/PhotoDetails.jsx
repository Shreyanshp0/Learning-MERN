import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const PhotoDetails = () => {
    const [photo, setPhoto] = useState([])
    const {id}=useParams()
   useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then((res)=>res.json())
        .then((data)=>setPhoto(data))
    },[])   
    const photos = photo.find(p=> p.id === parseInt(id))
  return (
    <div>
      <h1>Photo Details</h1>
         <h2>Photo Id: {id}</h2>
       <h2>Photo Title: {photos?.title}</h2>
       <img src={photos?.url} alt={photos?.title}/>
    </div>
  )
}
export default PhotoDetails