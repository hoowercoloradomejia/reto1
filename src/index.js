//constantes de configuracion puerto ejecuta proyecto

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const user_route = require('./routes/person.routes')

//constantes de configuracion conexion bd

const mongoose = require('mongoose')
require('dotenv').config()

//prueba de conexion puerto indicado
app.listen(port,()=> console.log('listening to puerto', port))

//localhost:3000
app.get('/',(req,res)=>res.send('Bienvenidos al proyecto'))

//metodo conexion bd CONNECTION_STRING_MONGODB
mongoose
        .connect(process.env.CONNECTION_STRING_MONGODB)
        .then(()=>console.log('Connetc with mongodb'))
        .catch((error)=>console.log(error))

//middleware: uri conexion probar request get,post,delete,put

app.use(express.json());

app.get('/home', (req, res)=>res.send("welcome to my api"));

//localhost:3000/api/people
app.use('/api/people', user_route);


