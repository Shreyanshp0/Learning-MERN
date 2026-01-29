// in hoist state we dont store the value in a var but in non hoist state we do the rather 
// hoisting will not show where the error occured but not in hoisting 

//hoisting

console.log(sum(2,6));

function sum(a, b){
    return a+b
}

//non hoisting
const s=function(a,b){
    return a+b
}
console.log(s(5,6));


//arrow function
// explicit
const add=(a,b)=>{
    return a,b
}

console.log(add(2,6));
//implicit
const a=(a,b)=>a+b
console.log(a(5,9));