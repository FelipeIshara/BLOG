const express = require('express')
const bodyParser = require('body-parser')
//const mongoose = require('mongoose')
const handlebars = require('express-handlebars')
const app = express()
//config
    //handlebars
    app.engine('hadlebars', handlebars({defaultLayout: 'main'})) 
    app.set('view engine', 'handlebars') 
    //bodyparser
    app.use(bodyParser.unlencoded({extended:false})) 
    app.use(bodyParser.json())
//Rotas

// Outros
const PORT = 8081
app.listen(PORT, () => {console.log("Servidor rodando! ")})
    
