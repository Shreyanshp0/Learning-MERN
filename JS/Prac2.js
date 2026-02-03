// closure
// Q1
// function outer(){
//     c=0
//     return{
//         increment(){
//             console.log(c++);
//         },
//         decrement(){
//             console.log(c--);
//         },
//         reset(){
//             c=0
//             console.log(c);
//         }
//     }
// }

// const res=outer()

// res.increment()
// res.increment()
// res.decrement()
// res.increment()
// res.reset()



//Q2

// function bankaccount(amt){
//     let balance=10000
//     return{
//         deposit(amt){
//             balance += amt
//         },
//         widraw(amt){
//             balance-=amt
//         },
//         getBalance(){
//             console.log(balance);
//         }
//     }
// }

// const res=bankaccount()
// res.getBalance()
// res.deposit(1000)
// res.getBalance()
// res.widraw(599)
// res.getBalance()


//Q3


// function once(fn) {
//   let called = false;
//   let result;

//   return function (...args) {
//     if (!called) {
//       called = true;
//       result = fn(...args);
//       return result;
//     }
//     return result;
//   };
// }


//Q5
// for single function 
// function createPassword(x){
//     return function checkpass(y){
//         return x===y
//     }
// }

// const pass=createPassword("hello")

// console.log(pass("hhello")); 
// console.log(pass("hello")); 


//------------------------------------------------------------------------------

//array
//Q1

// let arr=[1,2,3,4,5]
// const res=arr.map(num=>num*2)
// console.log(res);

//Q2
// let stu=[{name:'A', marks:40}, {name:'B', marks:80},{name:'C', marks:90}] 
// const res=stu.filter(num=>num.marks>50)
// console.log(res);

//Q3
// let arr=[{salary:1000}, {salary:2000}] 
// const total=arr.reduce((acc,num)=>{
//     return acc+=num.salary
// },0)
// console.log(total);

//Q4
// let arr=['ram','sam','tom']
// const res=arr.map(num=>num.toUpperCase())
// console.log(res);

//Q5
// let arr=['a','b','a','c','b','a']
// const count=arr.reduce((acc,num)=>{
//     acc[num]=(acc[num] || 0)+1
//     return acc
// },{})
// console.log(count);

//Q6
// let arr=[1,2,2,3,3,4]
// const a=arr.reduce((acc,num)=>{
//     if(!acc.includes(num)){ // here acc is already an array so will use higher order array functions to add elements 
//         acc.push(num)
//     }
//     return acc
// },[])
// console.log(a);

//Q7
// let arr=[{name:'A',salary:2000},{name:'B',salary:5000},{name:'C',salary:8000}]
// const max=arr.reduce((a,n)=>{
//   return a.salary>n.salary?a.salary:n.salary
// })
// console.log(max);

//Q8
// let arr=[1,2,3,4,5,6]
// const a=arr.filter(num=>num%2==0).map(num=>num*10)
// console.log(a);

//------------------------------------------------------------------------------
//Event and Event listner 


// let bt=document.querySelector("#bt1")
// let h2=document.querySelector("#count")
// let bt2=document.querySelector("#bt2")
// let b=document.querySelector("#Body")
// let e=document.querySelector("#email")
// let p=document.querySelector("#pass")
// let bt3=document.querySelector("#submit")
// let ta=document.querySelector("#text")
// let count=document.querySelector("#tc")


//Q1
// let count=0
// bt.addEventListener("click",()=>{
//     count++
//     h2.innerText=`${count}`
//     // console.log(count);
// })

//Q2
// const btn = document.getElementById("toggleBtn");

// btn.addEventListener("click", () => {
//   document.body.classList.toggle("dark");

//   if (document.body.classList.contains("dark")) {
//     btn.innerText = "Light Mode";
//   } else {
//     btn.innerText = "Dark Mode";
//   }
// });

//Q3

// bt3.addEventListener("click",()=>{
//     const val=e.value
//     let spl=val.split('')
//        if(spl.lenght>0){
//             if(spl.includes("@")){
//             console.log("Email is valid");
//             }
//               else{
//             console.log("Email is invalid");
//         }
//         }
//         else {
//             console.log("Field is empty");
//         }
// }

// )


// bt3.addEventListener("click",()=>{
//     const pval=p.value 
//     let pal=pval.split('')
//     if(pal.length>6){
//            console.log("Password accepted");
//         }
//     else {
//             console.log("Password is Short");
//         }
// })

//Q4
// ta.addEventListener("input",()=>{
//     let val=ta.value
//     if(val==""){
//         count.innerText="0"
//     }
//     else{
//         let sval=val.split(" ")
//         let len=sval.length
//         count.innerText=`${len}`
//     }
// })

// const ul = document.getElementById("list");

// ul.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     alert(event.target.innerText);
//   }
// });
