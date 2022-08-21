// composição de funções 
// · Um encadeamento de funções 
// · Uma função que retorna uma do e vai para outra função que retorna um dado e vai para outra função  que retorna ..

const people = ['rafa','Diego','Dani','Rod']
const upperCasePeopleThatStartsWithd = people.filter(person => person.startsWith('D')).map(dperson => dperson.toLocaleUpperCase())