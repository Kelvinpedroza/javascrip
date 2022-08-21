const express = require('express')
const app = express()

app.set("view engine","ejs")
console.log(app)

app.get("/", function(req,res){
    const items = [
        {
            title: 'D',
            message: 'esenvolver aplicações/serviços de forma fácil'
        },
        {
            title: 'E',
            message: 'JS usa JavaScript para rendenrizar HTML'

        },
        {
            title: 'M',
            message:'utio facil de usar'
        },
        {
            title: 'A',
            message: 'morzinho'

        },
        {
            title: 'I',
            message: 'nsatall ejs'
        },
        {
            title: 'S',
            message: 'intaxe simples'
        }

    ]
    res.render('pages/index' ,{
        qualitys:items,
    })
})
const  subtitle ='Uma linguagem dee modelagem para ciração em html'
app.get("/sobre", function(req,res){
    res.render('pages/about')
})



app.listen(8080);

console.log('Servidor on')