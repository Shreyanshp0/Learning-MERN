// spread operater '...' //helps us reduce api calls i.e if we fetched profile info once then we can use it anywhere using the spread operator 
// let arr=[1,2,3]
// arr.splice(2,1,5,6) //
// console.log(arr);
// let arr2=[...arr,4,5,6] // the spread operator concatinated arr with arr2 
// console.log(arr2);

// let arr3=[...arr,...arr2]
// console.log(arr3);

//Json stors data in key value 

// api call
// let status=[]
// for(let i=1;i<=10;i++){   
// const api=fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
// // .then((res)=> {return res.json()})
// .then(res=>res.json())
// .then(data=>{status.push(data.completed)})

// .catch(error=>{
//     console.log(error);
// })

// console.log(status);
// console.log(api);
// }


async function getStatuses() {
  const statuses = [];

  for (let i = 1; i <= 10; i++) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
    const data = await res.json();
    statuses.push(data.completed);
  }

  console.log(statuses);
}
getStatuses();
