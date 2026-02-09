import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const UserDetail = () => {
    const {id}=useParams()
     const [user, setUser]=useState([])
        useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res=>res.json())
            .then(data=>setUser(data))
        },[])
        const userd=user.find(user=>user.id===parseInt(id))
  return (
    <div>
        <h1>Name: {userd?.name}</h1>
        <h2>Email: {userd?.email}</h2>
        <p>Street: {userd?.address?.street}</p>
        <p>City: {userd?.address?.city}</p>
        <p>Company: {userd?.company?.name}</p>
            
                
     
    </div>
  )
}

export default UserDetail
