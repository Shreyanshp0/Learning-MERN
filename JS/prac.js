let bt1=document.querySelector("#bt1");
let bt2=document.querySelector("#bt2");
let bt3=document.querySelector("#bt3");
let head=document.querySelector("#head");
let div=document.querySelector("#div");





head.addEventListener("mouseover",()=>{
    head.style.backgroundColor="yellow";
})

bt1.addEventListener("click",()=>{
    head.innerText="Text Changed";

})
bt2.addEventListener("click",()=>{
    head.style.color="red";
})

bt2.addEventListener("dblclick",()=>{
    head.style.color="blue";
})
bt3.onclick=()=>{
    for(let i=1;i<=10;i++){
        console.log(`3 x ${i} = ${3*i}`);
    }
    alert("Table of 3 printed in console");
}

bt2.onclick=()=>{   
    div.style.backgroundColor="lightgreen";
}
bt2.ondblclick=()=>{   
    div.style.backgroundColor="lightblue";
}

try{
bt2.addEventListener("click",()=>{
    console.log("Event occured on bt2");
}) 
}
catch(e){
    console.log(e);
}
try{
   
    console.log(x);
}
catch(error){
    console.log(error);
}
try{
    let a=5/0
    console.log(a);
}
catch(error){
    console.log(error);
}
try{
    bt3.addEventListener("click",()=>{
        throw new Error("Intentional Error on bt3 click");
    })
}   
catch(error){           
    console.log(error);
}