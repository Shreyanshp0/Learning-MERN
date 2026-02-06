// import { useEffect, useState } from "react"
// import React from 'react'

// const Login = () => {
//     const[ userid , setUserId]=useState(0)
//     const [showPassword, setShowPassword]=useState(false)
//     const [inputPassword, setinputPassword]=useState("")
//     const[user, setUser]=useState([])
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then((res)=>res.json())
//         .then((data)=>setUser(data))
//     },[])
//     const logfn=()=>{
    
//         const finduser=user.find(
//             (user)=>{
//                 user.id===userid && user.name.toLowerCase()===inputPassword.toLowerCase()
//             }
//         )
//         if(finduser){
//             alert("Welcome")
//         }
//         else{
//             alert("Wrong User name or password")
//         }
        
//     }
//   return (
//     <div>
//       <h1>Login</h1>
//       <div>
//         <input type="text" placeholder="Enter your Id" value={userid} onChange={(e)=>{setUserId(e.target.value)}}/>
//         <div>
//         <input type={showPassword?"text":"password"} value={inputPassword} onChange={(e)=>{setinputPassword(e.target.value)}}  placeholder="Enter Your User Name"/>
//         <button onClick={()=>setShowPassword(!showPassword)}> {showPassword?"Hide":"Show"} </button>
//         </div>
//         <button onClick={logfn}>Login</button>
//       </div>
//     </div>
//   )
// }

// export default Login
import React, { useEffect, useState } from "react";

const Login = () => {
  const [userid, setUserId] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch users ONCE
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const logfn = () => {
    const foundUser = users.find(
      (user) =>
        user.id === Number(userid) &&
        user.username.toLowerCase() === inputPassword.toLowerCase()
    );

    if (foundUser) {
      setMessage(`Welcome, ${foundUser.name}! ✅`);
    } else {
      setMessage("Invalid ID or Username ❌");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Enter your ID"
        value={userid}
        onChange={(e) => setUserId(e.target.value)}
      />

      <div>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Username"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />

        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <button onClick={logfn}>Login</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
