// import React from 'react'
// import './props.css'
// const Props = (props) => {
//   return (
//     <div>
//       <h1>Props Example</h1>
//       <h1>{props.name}</h1>
//       <h1>Array Elements</h1>
//       <ul class="list">
        
//         {props.arr.map((num) => <li key={num}>{num}</li>)}
//       </ul>
//         <h1>Object Properties</h1>
//         <p>Name: {props.obj.name}</p>
//         <p>Age: {props.obj.age}</p>
//         <h1>Array of Objects</h1>
//         <ul class="list">
//             {props.arro.map((obj,index)=>{
//                 return <li key={index}>Name: {obj.name} Age: {obj.age}</li>
//             })}
//         </ul>
//         <button onClick={props.greet}>Greet</button>
        
//         <button onClick={()=>{props.sum(4,5)}}>Sum</button>
//         <button onClick={()=>{props.act(4,5,"add")}} onDoubleClick={()=>{props.act(4,5,"mul")}}>Action</button>
//     </div>
//   )
// }

// export default 
import React from "react";
import './App.css'
class Props extends React.Component {
  render() {
    const { user, fetchData } = this.props;

    return (
      <div>
        <h2>Child Component</h2>

        <button onClick={fetchData}>Load Users</button>

        {user.map((u) => (
    <div key={u.id}>
    <div className="dis">
   <div>
    <p>{u.name}</p>
   <h1>{u.email}</h1>
   </div>
   
</div>
    </div>
          
        ))}
       
      </div>
    );
  }
}

export default Props;
