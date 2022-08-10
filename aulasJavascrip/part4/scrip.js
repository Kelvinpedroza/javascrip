


/* Buscando e contando dardos em Arrays 
    Baseado no Array de livros por Categoria abaixo, faça os seguintes desafios

    · Contar o número de categoria eo número de livros em cada categoria
    · Contar o número de autores
    · Mostrar o livros do Augusto Cury 
    · Transfomar a function acima em uma function que ira receber o nome do autor e devolver os livros desse autor. 


*/

const booksByCtegory =  [
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
                author:'Ausgusto Cury',
            },
           
            {
                title:'Os 7 Habitos de pessoas altamente eficazes',
                author:'Ausgusto Cury',
            }

    ],
},

];

console.log(booksByCtegory[0].books[0].title)
