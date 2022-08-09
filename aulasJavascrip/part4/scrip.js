/* ## sistema de gastos familiares

crie um objeto que possia 2 propriedades, ambas do tipo arry
    * receitas :[]
    * despesas: []


Agora, crie uma função que ira calcular o total de receitas e despesas e irar mostrar uma mensagem se a familia esta com saldo positivo ou negativo, seguindo do valor do saldo 

*/

recipe ={
    revenue:[1000], // saldo
    expenses:[500] // debito
}


function familyRecipe(recipe){
    // recebe o saldo e o debito e calcula o restante
    
    let balance = recipe.revenue[0] - recipe.expenses[0];
    let positivo = balance > recipe.expenses[0]
    console.log(balance)
    if(positivo){
        console.log("O saldo da familia e positivo")
        
    }
    else{
        console.log('O saldo da familia e negativo')
        
    }
    
}

console.log(familyRecipe(recipe))