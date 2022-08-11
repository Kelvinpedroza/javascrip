


/* Buscando e contando dardos em Arrays 
    Baseado no Array de livros por Categoria abaixo, faça os seguintes desafios

    · Contar o número de categoria eo número de livros em cada categoria
    · Contar o número de autores
    · Mostrar o livros do Augusto Cury 
    · Transfomar a function acima em uma function que ira receber o nome do autor e devolver os livros desse autor. 


*/

const booksByCategory =  [
    {   
        category: 'Riqueza', 
        books:[
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker'
            },
            {
                title: 'O Homem mais rico da Babilonia',
                author: 'George S. clason'
            },

            {
                title: 'Pai rico , pai Podre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter',
            }
        
          
        ],

},
{
    category: 'Inteligência Emocional',
    books:[ 
            {
                title: 'Você é Emocional ',
                author: 'Augusto Cury',
            },
            {
                title:'Ansiedade - Como enfrentar o mal do seculo',
                author:'Augusto Cury',
            },
           
            {
                title:'Os 7 Habitos de pessoas altamente eficazes',
                author:'Augusto Cury',
            }

    ],
},

];


function searchBooks(procurar){
  
    let livros = 0
    let categoria = 0  
    let autores = 0 
    booksByCategory.forEach((value)=>{
        
        if(value.category){
            categoria++;
        }
        livros += value.books.length
        
    });

    booksByCategory.forEach((value1)=>{
        for( let value2 of value1.books){
           if(value2.author){
            autores++
           }
        }
        
    })

    booksByCategory.forEach((value3)=>{
        
        for( let value4 of value3.books){
            let agust
            if(value4.author === procurar){
                agust = value4.title
                console.log(`O Livro de ${procurar} é ${agust}`)
            }

        
        }
          
    })

 
      
    console.log(`A quantidade de autores é: ${autores}`)
    console.log(`A quantidade de livros é: ${livros}`)
    console.log(`A quantidade de Categorias é: ${categoria}`)
    
}


searchBooks('George S. clason')


