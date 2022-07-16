//Modulos: Express y Path
const express = require('express')
const app = express()
const path = require('path')

//Configuracion de la app
//Carpetas publicas
app.use(express.static(path.join(__dirname, '../public')))
//Configuraciones template engine: EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Rutas: hay una sola a / que es el mainRouter.js
const mainRouter = require('./routes/mainRouter.js')
app.use('/', mainRouter)

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
