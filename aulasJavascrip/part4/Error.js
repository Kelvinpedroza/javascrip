// thow


function sayMyName(name = ''){
    if(name ===''){
        throw new Error("Nome é necessario")
    }
    console.log('Depois do erro')
}

try{
  sayMyName('kelvin')

}catch(e){
  console.log(e)
}
console.log('Depois da funnção')