// import React from 'react'
// import Student from './Student'
// import Prop from './Props'

// //rafc -- react arrow function component 
// const arr=[1,2,3,4]
// const name ="Shreyansh"
// const obj={
//   name:"Shreyansh",
//   age:21
// }
// const arro=[{name:"Shreyansh", age:"21"},{name:"Yash", age:"27"}]
// const greet=()=>{
//   alert("Hello")
// } 
// const sum=(a,b)=>{
//   console.log(a+b) 
// }
// const act=(a,b,ac)=>{
//   if(ac==="add") console.log(a+b)
//   else return console.log(a*b)
  
// }
// const App = () => {
//   return (

//     <div>
//       <h1>Hello</h1>
//       <Student/> 
//       <Prop name={name} arr={arr} obj={obj} arro={arro} greet={greet} sum={sum} act={act}/> 
//       {/* <Calculator/> */}
//     </div>
//   )
// }

// export default App

// import React from "react";
// import Props from "./Props";
// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       user:[]
      
//     }
//   }
//   fetchData=()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response)=>response.json())
//     .then((data)=>this.setState({user:data}))

//   }

//     render() {  
//         return (
//             <div>
                
//                 <Props user={this.state.user} fetchData={this.fetchData}/>
//             </div>
//         )
//     }   
// }
// export default App;
//fix the error 
// import React from 'react'
// import State from './Hooks/State'
// import PasswordToggle from './Hooks/PasswordToggle'
// import Fetchuser from './Hooks/Fetchuser'
// import Login from './Hooks/Login'
// import Useref from './Hooks/UseRef'
// const App = () => {
//   return (
//     <div>
//       <h1>UseState Example</h1>
//       {/* <State/>
//       <PasswordToggle/> */}
//       {/* <Fetchuser/> */}
//       <Login/>
//       {/* <Useref/> */}
//     </div>
//   )
// }

// export default App
import React from 'react'
import Useref from './Hooks/UseRef'
import Login from './Hooks/Login'
import Srcoll from './Hooks/Srcoll'
import UseRefTimer from './Hooks/UseRefTimer'
import Portfolio from './Hooks/Portfolio'
import Props from './Props'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './Products/Products'
import ProductDetails from './Products/ProductDetails'
import PasswordToggle from './Hooks/PasswordToggle'
import PhotoApi from './Photos/PhotoApi'
import PhotoDetails from './Photos/PhotoDetails'
import User from './UserDashBoard/User'
import UserDetail from './UserDashBoard/UserDetail'
import UseMemo from './Hooks/UseMemo'
const App = () => {
  return (
    <div>
      {/* <Login/> 
       <Useref/>
      <Srcoll/> 
       <UseRefTimer/>
      <Portfolio/> */}

      <BrowserRouter>
      <Routes>
        <Route path="/UseMemo" element={<UseMemo/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/user/:id" element={<UserDetail/>}/>
        <Route path="/Photos" element={<PhotoApi/>}/>
        <Route path="/Photos/:id" element={<PhotoDetails/>}/>
        <Route path="/" element={<Portfolio/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Products/:id" element={<ProductDetails/>}/>
        <Route path="/Useref" element={<UseRefTimer/>}/>
        <Route path="/PasswordToggle" element={<PasswordToggle/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
