//Q1
let a1=[2,4,6,8]
let r1=a1.map(num=>num*2)
console.log(r1)

//Q2
let a2= [1,2,3,4,5,6,7]
let r2=a2.filter(num=>num%2==0)
console.log(r2)

//Q3
let a3=[10,20,30,40]
let r3=a3.reduce((num,acc)=>{return num+acc},0)
console.log(r3);

//Q4
let a4=[10,25,60,40,80]
let r4=a4.find((num)=>{return num>50})
console.log(r4);

//Q5
let a5=[3,5,-2,9]
let r5=a5.some((num)=>{return num<0})
console.log(r5);

//Q6
let a6=[2,4,6,-8]
let r6=a6.every((num)=>{return num>0})
console.log(r6);

//Q7
function calculate(a,b,callback) {
    callback(a,b)
}

calculate(5,3,(a,b)=>{
 console.log(`${a+b}`);
})


//Q8
function completion(callback){
    setTimeout(()=>{
        callback()
    },3000)
}
completion(()=>{
    console.log("Task Completed");
})

//Q9
const arr = [1, 2, 3, 4];
arr.forEach(function (element) {
  console.log(element * 2);
});

//Q10
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 3000);
});

myPromise.then(result => {
  console.log(result);
});

//Q11
function checknum(num){
    return new Promise((resolve, reject)=>{
        if(num<5){
        reject("Failed")}
        else{
            resolve("Success")
        }})

}
checknum(4)
.then(res=>console.log(res))
.catch(e=> console.log(e))

//Q12
Promise.resolve(5)
.then(num=>num*2)
.then(num=>num-3)
.then(res=>console.log(res))

//Q13
async function greet() {
    await new Promise(resolve=>setTimeout(resolve, 2000))
    return "Hello Shreyansh"
}

greet().then(message => {
  console.log(message);
});

//Q14
async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
getPost();

//Q15
async function w() {
    await new Promise(resolve=>setTimeout(resolve, 2000))
    console.log("Done");
}
w()

//Q16
let a16=[1,2]
let r16=[...a16,4,5]
console.log(r16);

//Q18
const [a,b]= [100, 200, 300];
console.log(a)
console.log(b);

//Q19
const user={name:'John',age:25}
const {nam,age}=user
console.log(nam);
console.log(age);

//Q20
async function na() {
    let t=[]
    try{
        for(let i=1;i<=11;i++){
            const api= await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
            const data =await api.json()
            t.push(data.id)
        }
        console.log(t);
    }
    catch(e){
        console.log(e);
    }
}
na()

