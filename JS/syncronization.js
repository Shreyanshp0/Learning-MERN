// in sync if any page has some issue it'll not load further pages and it will not show where the error occured 
// in async every page is loaded independently and if any page has some issue it'll ignore it and other pages will load successfully
// callback <=> promises <=> async 
// callback was code intensive that's why promises was introduced "callback hell"
// promise will tell is the request is resolved or rejected 
// promise.then promise.catch used for api calling ~
// when we use Async it will automatically create promise 
// await used for pausing the program till the awaited function is executed  


// async function getUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/10");
//         const users = await response.json();
//         console.log(users);
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// getUsers();




// callbacks 

// function sum(a,b){
//     console.log(a+b);
// }

// function sumAll(a,b, sumcallback){ // callback is used to execute more than one function at once 
//     setTimeout(()=>{
//         sumcallback(a,b)
//     },3000) // this the timeout interval it will pause the execution of the code for 3 sec
//     function min(a,b){
//         console.log(a-b);
//     }
//     min(5,3)
// }

// sumAll(1,3,sum) 

// callback hell

// function getdata(data, nextdata){
//     setTimeout(()=>{
//         console.log(data);
//         nextdata()
//     },2000)
// }

// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3,()=>{})
//     })
// })


// promises
// function getdata(data, nextdata){
   
//     return new Promise((resolve, reject) => {
        
      
//          setTimeout(()=>{
//         console.log(data);
//         nextdata()
//         resolve("Succes");
//         reject("Error");
//     },3000)
//     });
// }

// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3,()=>{})
//     })
// })

// async await

// function getdata(data){
//         console.log(data);
// }



// async function name(){
//     await getdata(1) // await acts as setTimeout 
//     await getdata(2)
//     await getdata(3)
// }
// name()

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data received");
  } else {
    reject("Something went wrong");
  }
});
console.log(myPromise);

// create a fucntion which returns a promise and after 3 sec it will resolve the promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" };
      resolve(data);
    }, 3000);
  }
  );
}
