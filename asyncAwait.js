//promise creator
//promise reciever

function getData(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve('hi')
            
        },1000);
    })
}


const start= async ()=> {
    const value = await getData()
    console.log(value)
    return value
}

const newStart = async ()=>{
    const value = await fetch()
}
const vals=start()
console.log(vals)