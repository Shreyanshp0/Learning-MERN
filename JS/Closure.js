// function outer(){
//     let outerVar =0;
//     return function inner(){
//         outerVar++;
//         console.log(`${outerVar}`);
//     }
    
// }
// const count1=outer();
// const count2=outer();
// count1()
// count1()
// ---------------------
// function bankaccount(){
//     let balance=10000
//     return function widrwal(amount){
//         balance -= amount
//         console.log(`Your current balance is ${balance}`);
//     }
// }
// const nb=bankaccount()
// nb(100)

/// reset increment decrement
 
// question 
// function counter(){

//     let count=0;
//     return {
//             increment(){
//             count++
//             console.log(`${count}`);
//             },
//             decrement(){
//                 count--
//                 console.log(`${count}`);
//             }
//             ,
//             reset(){
//                 count=0
//                 console.log(`${count}`);
//             }
//         };
// }
// const c=counter()
// c.increment()
// c.increment()
// c.reset()
// c.increment()
// c.decrement()

//// rate limiter 

// function user(){
//     let nu=0
//     return function hit(){
//         nu++
//         if (nu<=3){
//             console.log("Access Allowed");
//         }
//         else{
//             console.log("User limit exceded");
//         }
//     }
// }
// const f=user()
// f()
// f()
// f()
// f()
// f()
// only once 
// function once(fn) {
//   let called = false;

//   return function (...args) {
//     if (!called) {
//       called = true;
//       return fn.apply(this, args);
//     }
//   };
// }

// const init = once(() => {
//   console.log("Initialized");
// });

// init(); // Initialized
// init(); // nothing
// init(); // nothing


// function outer (x){            
//   return function inner(y){
//     console.log(x+y);
//   }
// }
// const o=outer(3)
// o(4)


// function secret(){
//   let count=0
//   return{
//     increment(){
//       count++
//     },
//     get(){
//        return count;
//     }
//   }
// }
// const s = secret();
// console.log(s.get()); 
// s.increment();
// s.increment();
// console.log(s.get()); 


