//
const sayMyName = (name) =>{
    name()
}

sayMyName(
    () =>{
        console.log('Estou em uma callback')
    }
)



const nomes = (nome) =>{
    console.log('kelvin')
    nome()
}


nomes(
    () =>{
        console.log('pedroza')
    }
)