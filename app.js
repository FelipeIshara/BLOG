const express = require('express')
const bodyParser = require('body-parser')
//const mongoose = require('mongoose')
const handlebars = require('express-handlebars')
const app = express()
const admin = require('./routes/admin')
//config
    //bodyparser
    app.use(bodyParser.urlencoded({extended: true})) 
    app.use(bodyParser.json())    
    //handlebars
    app.engine('hadlebars', handlebars({defaultLayout: 'main'})) 
    app.set('view engine', 'handlebars') 
    
//Rotas
    app.use('/admin', admin)
// Outros
const PORT = 8081
app.listen(PORT, () => {console.log("Servidor rodando! ")})
    
