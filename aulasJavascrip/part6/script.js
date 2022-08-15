// getElemntById()
/* 
let element = document.querySelector('input')



console.log(element.value)
element.value ="outro" */

/* const header = document.querySelector('header')

header.setAttribute('id','header')

const headerID = document.querySelector('#header')



console.log(headerID.getAttribute('class'))

header.removeAttribute('class')
 */
/* 
const element = document.querySelector('body')


element.style.backgroundColor = ('yellow')

console.log(element.style.backgroundColor) */
/* 

const element = document.querySelector('body')

element.classList.add('ative', 'green')

element.classList.remove('ative','green')

element.classList.toggle('ative') 

console.log(element.classList) */


// Navegendo pelos elementos
// parentNode parentElement

/* const body = document.querySelector('body')


console.log(body.parentElement) */

/* 

const el = document.querySelector('body')


//fristChild fristElementChild
console.log(el.firstElementChild)


// lastChild lastElementChild
console.log(el.lastChild) */


/* 
// Navegando pelos Elementos irmãos 

const el = document.querySelector('body script')
// nextSibling nextElementSibling


// previousSibling previousElementSibling 

console.log(el.previousElementSibling) */


// Criando e adicionando elementos

// createElement

/* const div = document.createElement('div')

div.innerText = 'Ola'
// append prepend
const body = document.querySelector('body')

body.prepend(div) */

/* 
// Adicionando elementos

const div = document.createElement('div')
div.innerText = 'Ola devs'



// insertBefore
const body = document.querySelector('body')
const header = body.querySelector('header')

body.insertBefore(div,header.nextElementSibling) */





/* 
// Eventos 
function print(){
    console.log('print')
}
 */
/* 

//Eventos 

const h1 = document.querySelector('h1')
h1.addEventListener('click',print)

function print(){
    console.log('print')
} */


const input = document.querySelector('input')

input.onkeydown= function(event) {
    console.log(event.currentTarget.value)
}