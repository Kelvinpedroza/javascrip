const questions = [
    "O que aprendi hoje?",
    "o que me deixou aborrecido?  E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas eu ajudei hoje?"
]

const ask = ( index = 1 ) => {
    process.stdout.write(questions[index] + "\n \n \n")
}
ask()