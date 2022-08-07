/* 
type conversion (typecasting ) vs type coersion

* Alteração de um tipo de dado apra outro tipo

number = parseInt("23")

console.log(number)
let string='12'
console.log(Number(string))
let number = 23
console.log(String(number))

let word ='Paralelepipedo'
console.log(word.length)

let number = 312

console.log(String(number).length)

let number = 1224.21312

console.log(number.toFixed(2).replace(".",",    "))


// verificar se o texto contem a palavra amor 
let phere ='Eu qeuro viver o amor'
console.log(phere.includes("amor")) // includes verificar se existe algo dentro
*/

 // Manipulação String e Arrays

// Separe um texo qye contem espaços, em um novo array onde cada texto é uma posição do array, depos disso transforme o array em um texto onde eram espaços e coloque _

//let phrase ="Eu quero viver o Amor!"
//let myArray = phrase.split(" ") 
//let phraseWithUnderscore = myArray.join("_") junta as frases
//console.log(phraseWithUnderscore.toLocaleLowerCase())






// Manipulação Arrays

// Criar Array com construtor 

//let myArray = new Array('a','b')

//console.log(myArray)

// contar elementos de uma Array

//let word ="manipulação"

//console.log(Array.from(word))


// Manipulando Arrays

let techs =["html","css","js"]

// Adicionar um item no fim
console.log(techs.push("nodejs"))
// adicionar no começo
techs.unshift("sql")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// peragr soemnto alguns elementos do array
console.log(techs.slice(1,3))
// remover um ou mais items em qualquer posição do array
techs.splice(1,1)
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')



console.log(index)