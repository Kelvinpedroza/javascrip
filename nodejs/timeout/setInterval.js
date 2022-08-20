const timeout = 1000
const cheking =() => console.log('cheking')

const interval = setInterval(cheking,timeout)

setTimeout( ()=> clearInterval(interval),3000)
