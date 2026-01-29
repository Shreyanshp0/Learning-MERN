//fix the error below

let bt=document.querySelector("#btn")
// bt.onclick = (e)=> { // the paramenter element "e" holds all the information about this event 
//     console.log(e);
//     console.log(e.type); // tells what type of event it is 
//     console.log(e.target);// tells where the event occurs 
//     console.log(e.clientX);// tell the position of event acc to the mouse pointer 
//     console.log(e.clientY);
// };
try{
let bt2=document.querySelector("#bt2")

bt.addEventListener("click",()=>{
    console.log("Event occured ");
},
)
    

// 
function click1(){
    console.log("Clicked 1");
}

function click2(){
    console.log("Clicked 2");
}

bt.addEventListener("click",click1)
bt.addEventListener("click",click2)
bt.removeEventListener("click",click2)
}
catch(e){
    console.log(e);
}

//
// throw new Error("lag is not defined"); // it'll the throw the error for debugging purpose 
try{
console.lag("hello")}
catch(error){
    console.log(error);
}