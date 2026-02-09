import React, { useEffect, useState } from 'react'
import { Link  } from 'react-router-dom'
const User = () => {
    const [user, setUser]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUser(data))
    })
  return (
    <div>
      {
        user.map((u)=>{
            return(
            <div key={u.id}>
            <h2>Name: {u.name}</h2>
            <Link to={`/user/${u.id}`}>See User Detail</Link>
            </div>
            )
        })
      }
    </div>
  )
}

export default User
