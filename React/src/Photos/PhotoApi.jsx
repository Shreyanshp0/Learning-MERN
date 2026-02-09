import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const PhotoApi = () => {
    const [photo, setPhotos] = useState([])

    useEffect(()=>{
fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then((res)=>res.json())
    .then((data)=>setPhotos(data))
    },[])
    
  return (
    <div>
      {
        photo.map((p)=>{
          return (
            <div key={p.id}>
              <h1>{p.title}</h1>
              <img src={p.url} alt={p.title}/>
              <Link to={`/Photos/${p.id}`}>View Details</Link>   
                
            </div>
          )
        })  
      } 
    </div>
  )
}

export default PhotoApi
