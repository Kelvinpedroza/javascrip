const questions = [
    "O que aprendi hoje?",
    "o que me deixou aborrecido?  E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas eu ajudei hoje?"
]

const anwers = []


const ask = ( index = 0 ) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}
ask()

process.stdin.on("data",data =>{
    anwers.push(data.toString().trim())
    if(anwers.length < questions.length ){
        ask(anwers.length)
    } else {
    
        process.exit()
    }
    
})

process.on('exit',()=>{
    console.log(
        questions[0] + ' : ',
        anwers[0] + '\n' ,
        questions[1] + ' : ',
        anwers[1] + '\n' ,
        questions[2] + ' : ',
        anwers[2] + '\n',
        questions[3] + ' : ',
        anwers[3] + '\n'
    )

})