/* let altura = 50
let largura = 60

function calcularArea(){
    return altura * largura
}
let area = calcularArea()

console.log(area) */

class Poligono {
    constructor(altura,largura){
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calcularArea()
    }

    #calcularArea(){
        return this.altura * this.largura
    }
}

let poligono = new Poligono(50,60)
console.log(poligono.area)