// // Q2
// let nums = [1, 2, 3, 4];
// const mn=nums.map((num)=>{
//     return num*2;
// })
// console.log(mn);


// console.log("------------------");
// //Q3
// let numS = [10, 15, 20, 25, 30];
// const en=numS.filter((num)=>num%2==0)
// console.log(en);
// console.log("------------------");
// //Q4
// let nuMs = [12, 45, 2, 89, 34];
// const t=nuMs.reduce((sum,num)=>{
//     return sum+num
// },0)
// console.log(t);
// console.log("------------------");
// //Q5
// let n = [12, 45, 2, 89, 34];
// const max= n.reduce((a,b)=>a>b?a:b)
// console.log(max);




// console.log("------------------");
// //Q6
// let users =[{id:1,name:'A'},{id:2,name:'B'},{id:3,name:'C'}];
// const arr=users.map((num)=>{
//     return num
// })
// console.log(arr);
// console.log("------------------");
// //Q7
// const age=[12,18,52,1,25]
// const na=age.filter((num)=>num>=18)
// console.log(na);
// console.log("------------------");
// //Q8
// let num = [12, 45, 2, 89, 34];




// console.log("------------------");
// //Q9
// const ar=[1,2,3,4,5,6] 
// const nr=ar.filter((num)=>num%2==0).map((num)=>{return num*10})
// console.log(nr);
// console.log("------------------");
// //Q10
// let itr = [100,2000,3555,4555]
// const total=itr.reduce((a,num)=>{return a+num},0)
// console.log(total);

// console.log("------------------");
// //Q11

// let user = [ { name: "Ravi", age: 17 }, { name: "John", age: 22 }, { name:
// "Sara", age: 25 }]
// const res=user.filter((u)=>u.age>18).map((num)=>num.name)
// console.log(res);

// console.log("------------------");
// //Q11

// const a=[1,2,3,4]
// a.shift()
// console.log(a);
// a.unshift(1)
// console.log(a);
// const total=a.reduce((a,num)=>{
//    return a+num
// },0)
// console.log(total);

// let products = [ { name: "Mouse", price: 500 }, { name: "Keyboard", price: 1500 },
// { name: "Monitor", price: 8000 } ];
// let total=products.filter((num)=>num.price>1000).reduce((a,n)=>a+n.price,0)
// console.log(total);

// let nums = [1,2,3,4,5,6];
// const snums=nums.filter((num)=>num%2==0).map((num)=>num*num)
// console.log(snums);


// let users = [ { id: 1, name: "A" }, { id: 2, name: "B" } ]; 
// let lookup=users.reduce((acc,num)=>{
//     acc[num.id]=num
//     return acc
// },{})
// console.log(lookup);

// let nums = [10, 20, 30, 40]; 
// let avg=nums.reduce((acc,num)=>acc+num,0)/nums.length;
// console.log(avg);

// let str = "I love javascript and javascript"; 
// let res=str.split(" ").reduce((acc,num)=>{acc[num]=(acc[num]|| 0)+1; return acc},{})

// console.log(res);

// let nums =[1,3,4,3,2,2,1,1]
// let count=nums.reduce((acc,num)=>{
//     acc[num]=(acc[num]|| 0)+1
//     return acc
// },{})
// console.log(count);

// let nn=nums.reduce((acc,num)=>{
//         if(!acc.includes(num))
//         { acc.push(num)}
//         return acc
// },[])
// nn.sort() 
// console.log(nn);


// let nums = [1,2,2,3,3,3,4];

// const count=nums.reduce((acc,num)=>{
//     acc[num]=(acc[num]||0)+1
//     return acc
// },{})

// console.log(count);

// let nums = [12, 45, 2, 89, 34];

// const max=nums.reduce((a,b)=>a>b?a:b)
// const max=nums.reduce((a,b)=>{
//     if (a>b)return a;
//     else return b;
// })
// console.log(max);
