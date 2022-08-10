/* ### celsius em fahrenheit 

    Crie uma função que recba uma string em celsius ou fahtrenheit
    e faça a transformação de uma unidade para a outra

    c = (f-32) * 5/9
    F = C* 9/5 + 32


// Transformar graus fahrenheit em graus celsius
function transforC(temperature){
    let temperatureA = Number(temperature)
    let temperatureC = (temperatureA * 9/5) + 32
    console.log(`A temperatura em graus Fagenheit e de ${temperatureC.toFixed(2)}`)
}

// Transfomar graus celcius em Fahenheit
function transdorF(temperature){
    
    let temperatureA = Number(temperature)
    let temperatureC = (temperatureA - 32) * 5/9
    console.log(` A temperatura em graus Celsius e de ${temperatureC}`)
}

transforC('4230') // colocar graus C
transdorF('764.6') // colocar graus F
*/

function transformDegree(degree){
    const celsiusExistes = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //Fluxo de error
    if(!celsiusExistes && !fahrenheitExists){
        throw new Error('Grau não encontrado')
    }

    // Fluxo ideal
    let upadateDegree = Number(degree.toUpperCase().replace("F",""))
    let formula = (faherenheit) =>(faherenheit-32)* 5/9
    let degreenSign ='C'
    
    // FLuxo alternativo
    if(celsiusExistes){
    upadateDegree = Number(degree.toUpperCase().replace("C",""))
    formula = (celcius) => celcius * 9/5 + 32
    degreenSign ='F'

    }

    return formula(upadateDegree) + degreenSign
    
}
try{
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
}catch(error){
    console.log(error.message)
}