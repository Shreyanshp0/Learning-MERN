
//Q1
function createGreeting(name){
    return function print(){
        console.log(name);
    }
}
const n=createGreeting("Shreyansh")
n()

//Q2
function score(){
    let s=0
    return {
        addscore(){
            s++
        },
        getscore(){
            console.log(s);
        }
    }
}
const s=score()
s.addscore()
s.getscore()
s.addscore()
s.getscore()

//Q3
function fn(name){
    count=0
    return function print(){
        if(count<3){
            console.log(name);
            count++
        }
        else{
            console.log("Limit exceeded");
        }
    }
}
const t=fn("Shreyansh")
t()
t()
t()
t()

//Q4
function role(){
    let ro="admin"
    return function server(r){
        if(r===ro){
            console.log("Access Granted");
        }
        else{
            console.log("Access Denied");
        }
    }
}
const ac=role()
ac("admin")
ac("user")
//Q5



//Q6
function idgen(){
    let id=12300
    return function genid(){
        id++
        console.log(`Id: ${id}`);
    }
}

const id=idgen()
id()
id()
id()
//Q7


//Q8

function counter(){
    let c=0
    return function counts(step){
        c=c+step
        console.log(c)
    }
}
let co=counter()
co(3)
co(4)
co(5)

//Q9
function vote(){
    let y=0
    let n=0
    return{
        yes(){
            y++
        },
        no(){
            n++
        },
        getResult(){
            console.log(`Number of Yes votes: ${y} \nNumber of No votes: ${n}`);
        }
    }
}
const cast=vote()
cast.yes()
cast.yes()
cast.yes()
cast.yes()
cast.yes()
cast.yes()
cast.no()
cast.no()
cast.no()
cast.getResult()

//Q10
function discount(){
    let dis=10
    return function finalp(amt){
        total=amt-(amt*(dis/100))
        console.log(total);
    }
}
const price=discount()
price(10000)
price(500)
