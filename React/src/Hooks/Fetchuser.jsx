import React,{useState, useEffect} from 'react'
import './Fetchuser.css'
const Fetchuser = () => {
    const [user ,setUser]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setUser(data))
    },[])
   
  return (
    <div className="boxes">
      {user.map((user) => {
        return (
          <div className="userCard" key={user.id}>
            <h2>{user.name}</h2>
            <h4>{user.email}</h4>
          </div>
        );
      })}
    </div>
  );
    
}

export default Fetchuser
