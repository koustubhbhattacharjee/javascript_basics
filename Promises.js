function getWeather(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`MJ`)
        },200)
    })
}


function getWeatherIcon(weather){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            switch(weather){
            case 'Sunny':
                resolve("⛅")
                break
            case 'Cloudy':
                resolve("🌩️")
                break 
            case 'Rainy':
                resolve("🌧️")
                break 
            default:
                reject("NO ICON FOUND")
            }
            },200)
        }
    )
}

const promise = getWeather()
const onSuccess = (data)=>{
    console.log(`success ${data}`)
}
const onFailure = (error)=>{
    console.log(`failure ${error}`)
}

const intheEnd = (final)=>{
    console.log(`finally ${error}`)
}

getWeather()
.then(getWeatherIcon)
.then(onSuccess)
.catch(onFailure)
.finally(intheEnd)

