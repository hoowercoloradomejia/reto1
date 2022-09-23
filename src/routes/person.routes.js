const express = require('express')
const user_schema = require ('../models/person.model')
const person_routes = express.Router()

//agregar nuevo usuaios  bd
person_routes.post('/person', (req,res)=>{
    const new_person = user_schema(req,body)
    new_person
        .save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
});

//lstar  usuaios existentes  bd
person_routes.get('/person', (req,res)=>{
    user_schema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}))
})

//consultar recurso especifico en la bd

person_routes.get('/:personId',(req,res)=>{
    const {personId}= req.params;
    user_schema
        .findById(personId)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({menssage:error}))
})

//eliminar un recurso especifico en la bd
person_routes.delete('/:personId',(req,res)=>{
    const {personId}= req.params
    user_schema
        .remove({ _id: personId})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({menssage:error}))
})

//actualizar recurso especifico en la bd
person_routes.put('/:personId',(req,res)=>{
    const {personId}= req.params
    const{user_name,lastname,age,email, proffession, address_work } = req.body;
    user_schema
        .updateOne({ _id: personId },{$set:{user_name,lastname, age, email,proffession,address_work}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({menssage:error}))
})

module.exports=person_routes;