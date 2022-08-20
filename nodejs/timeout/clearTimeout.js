// clearTimeout vai rodar uma função depois de X milessegundos

const timeOut = 3000

const finished = () => console.log('done!')

let timer  = setTimeout(finished,timeOut)


clearTimeout(timer)