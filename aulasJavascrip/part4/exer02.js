/* ## sistema de gastos familiares

crie um objeto que possia 2 propriedades, ambas do tipo arry
    * receitas :[]
    * despesas: []


Agora, crie uma função que ira calcular o total de receitas e despesas e irar mostrar uma mensagem se a familia esta com saldo positivo ou negativo, seguindo do valor do saldo 

*/

recipe ={
    revenue:[10000,100], // saldo
    expenses:[5000,10,] // debito
}


function familyRecipe(recipe){
    // recebe o saldo e o debito e calcula o restante
    let i = 0
    for(let value of recipe.revenue){
        i += value      
    }

    let expensesResult = 0
    for( let value of recipe.expenses){
        expensesResult += value
    }

    let result =  i - expensesResult

    
    let balance = result

    let positivo = balance >= expensesResult

    
    
    if(positivo){
        console.log(`O saldo da familia e positivo o saldo e ${balance.toFixed(2)}`)
        
    }
    else{
        console.log(`O saldo da familia e negativo o saldo e ${balance.toFixed(2)}`)
        
    }
    
}

console.log(familyRecipe(recipe))