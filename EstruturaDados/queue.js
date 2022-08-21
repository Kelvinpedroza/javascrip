// modelagem
class Queue {
    constructor() {
        this.data = []
    }
    enqueue(item){
        this.data.push(item)
        console.log(`${item} Chegou na fila!`)
    }

    dequeue(){ 
        const item = this.data.shift()
        console.log(`${item}  Saiu da fila!`)
    }
}

// 2: utilizando

const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('Joao')
fila.enqueue('Aruiel')

fila.dequeue()
fila.dequeue()
fila.dequeue()