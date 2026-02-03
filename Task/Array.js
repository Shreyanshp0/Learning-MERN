//Q1
let a1=[10,20,30]
let r1=a1.map((num)=>num+5)
console.log(r1);

//Q2
let a2=['a',1,'b',2,'c']


//Q3
let a3=[1,2,3,4]
let r3=a3.reduce((acc,num)=>{return acc*num},1)
console.log(r3);

//Q4

let a4=[100,500,300,400]
let r4=a4.map((num)=>{
    return num+(num*(18/100))
}).reduce((acc,num)=>{return acc+num},0)
console.log(r4);


//Q5
let a5=[20,60,80,40,90,]
let r5=a5.filter(num=>num>50).length
console.log(r5);

//Q6
let a6=[{email:"a@gmail.com", pass:"abv"},{email:"b@gmail.com", pass:"vba"},{email:"c@gmail.com", pass:"vca"}]
let r6=a6.map(num=>num.email)
console.log(r6);

//Q7
let a7= ['js','html','css'] 
let r7=a7.map((num)=>{return num.toUpperCase()})
console.log(r7);

//Q8
let a8=[10,20,30,40]
let r8=a8.reduce((acc,num)=>{ return acc+num},0)/a8.length
console.log(r8);

//Q9
let a9=[]



//Q10
let a10=[{user:"Shreyansh", status:"active"},{user:"Yash", status:"inactive"},{user:"Ajai", status:"active"},{user:"Sandhya", status:"inactive"}]
let r10=a10.filter((num)=>{return num.status=="active"})
console.log(r10);
