//Manipulation in Array
const number=[2,4,6,8] 
number.forEach((num,i)=>{ //used to access each element of the array | first variable is element second variable is the position of the ele
    console.log(num*num,[i])
})
console.log("---------");
number.map((num, i )=>{
   console.log(num,[i]);
})
console.log("---------");
const wn=[20,-10,-8,2]
const postive=wn.filter((num=> num>0));
console.log(postive);
console.log("---------");

const total=wn.filter(num=> num>0).reduce((sum,n)=>{   // first var of reduce is the sum holder and the second var is the element of the array
    return sum+n
},0)

console.log(total);