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

//Rutas: hay una a / que es el mainRouter.js
//y otra a /users que es al userRouter.js
const mainRouter = require('./routes/mainRouter.js')
const userRouter = require('./routes/userRouter.js')
app.use('/', mainRouter)
app.use('/user', userRouter)

const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
