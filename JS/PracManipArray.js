// Q2
let nums = [1, 2, 3, 4];
const mn=nums.map((num)=>{
    return num*2;
})
console.log(mn);


console.log("------------------");
//Q3
let numS = [10, 15, 20, 25, 30];
const en=numS.filter((num)=>num%2==0)
console.log(en);
console.log("------------------");
//Q4
let nuMs = [12, 45, 2, 89, 34];
const t=nuMs.reduce((sum,num)=>{
    return sum+num
},0)
console.log(t);
console.log("------------------");
//Q5
let n = [12, 45, 2, 89, 34];
const max= n.reduce((a,b)=>a>b?a:b)
console.log(max);




console.log("------------------");
//Q6
let users =[{id:1,name:'A'},{id:2,name:'B'},{id:3,name:'C'}];
const arr=users.map((num)=>{
    return num
})
console.log(arr);
console.log("------------------");
//Q7
const age=[12,18,52,1,25]
const na=age.filter((num)=>num>=18)
console.log(na);
console.log("------------------");
//Q8
let num = [12, 45, 2, 89, 34];




console.log("------------------");
//Q9
const ar=[1,2,3,4,5,6] 
const nr=ar.filter((num)=>num%2==0).map((num)=>{return num*10})
console.log(nr);
console.log("------------------");
//Q10
let itr = [100,2000,3555,4555]
const total=itr.reduce((a,num)=>{return a+num},0)
console.log(total);

console.log("------------------");
//Q11

let user = [ { name: "Ravi", age: 17 }, { name: "John", age: 22 }, { name:
"Sara", age: 25 }]
const res=user.filter((u)=>u.age>18).map((num)=>num.name)
console.log(res);

console.log("------------------");
//Q11


