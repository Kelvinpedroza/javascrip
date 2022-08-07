// Operador condicional (ternário)


// Dependendo da condição, nós receberemos calores direntes

// condição então valor 1 se não valor 2

// condition ? value1 : value2

//Ememplos


// café da manhã top

let pao = false
let queijo = false

const niceBreakfast = pao || queijo ? 'café top' : 'café ruim'

//console.log(niceBreakfast)
//maior de 18

let age = 16

const canDrive = age >= 18 ? 'can driver' : 'cant driver' // ? = então : = se não
console.log(canDrive)