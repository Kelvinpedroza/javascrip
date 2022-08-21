const pilotos = ['Senna','Prost','Schumacher','Hamilton']
// a indexação (index) começa pelo número 0 


for (let piloto of pilotos) {
    console.log(piloto)
}

// Adicionar elementos

pilotos.push('Alonso')

console.log(pilotos)

const senna = pilotos.find(piloto => piloto ==='Senna')
console.log(senna)

// deletar um elemento

pilotos.splice(1,1)