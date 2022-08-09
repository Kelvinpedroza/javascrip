// id ...else

let temperature = 37.5
let higthTemperature = temperature >= 37.5
let meduimTemperature = temperature < 37.5  && temperature >= 37


if(higthTemperature){
    console.log('Febre Alta')
} else if(meduimTemperature){
    console.log('Febre Moderada')

}else{
    console.log('Saudavel')
}