async function name() {
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
name()
