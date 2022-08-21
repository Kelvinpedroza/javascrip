/* Funções independentes 
devera ter ao menos 1 argunmento 
devera retornar algo
nada que acontecer la dentro afera o mundo externo
    dados imutaveis 
    não gaurda estado 

 · não faremos uso de loops (for,while), mas se houver necessidade de tal, usaremos recursão ( a funçãop chama ela mesma) */    

/* 



const random =(number,Math)=> Math.floor(Math.random() * number) */

// recursive
// find the factorial od a number
/* const factorial = x =>{
    
    //if number is 0
    if(x === 0){
        return 1; 
    }
    return x * factorial(x-1)
}
console.log(factorial(1)) */


/* 

// Função impura
// Exemplo  1: está dependendo  de dados externos
// que não foi passado como parâmetro
function calculateCircuference(radius){
    return Math.PI * (radius + radius)
}

// Exemplo 2: está alterando um dado externo
let person = {
    name: 'Rafael Camarda',
    age: 'jovem'
}

function changeName(name) {
    person.name = name
}

// Função pura 

// Exemplo 1

const calculateCircuference = function(pi,radius){
    return pi * (radius + radius)

}

// Com arrow function 
const calculateCircuference = (pi,radius) => pi * (radius + radius)

// exemplo 2 
const changePersonName = (person,name) => ({...person,name}) */



/* const sayMyName = () => console.log('kelvin')
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random)) */






// Higher-order function

// Exemplo com .map() JS

const numbers = [2,3,4,56]
const square = n => n * n

const squaredNumber = numbers.map(square)

// Exemplo de um retorno de função
//(currying ou aplicação parcial de função)
const pause = wait => fn => setTimeout(fn,wait)

pause(600)(() => console.log('Waiting 600ms'))

const wait200 = pause(200)
const wai1000 = pause(1000)


wait200(()=>console.log('waiting 200ms'))
wai1000(()=>console.log('waiting 1s'))