import * as fs from 'fs'

// const fs = require('fs')  // pehle type-module hatana padega package.json se 
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const users = data.users;


// MVC model view controller 
const createUser = (req,res) => {   
    console.log(req.body);
    users.push(req.body)
    res.status(201).json(req.body);
}
const getAllUser = (req, res) =>  {
    res.json(users)
}
const getUser =  (req,res ) => {
    const id = + req.params.id;
    const product = users.find(p=>p.id == id)
    res.json(product);
}   
const replaceUser = (req, res) => {
    const id = + req.params.id;   
    const product = users.findIndex(p => p.id == id) 
    users.splice(productIndex, 1, { ...req.body, id: id })  
    
    res.status(201).json(product)  
}
const updateUser =(req, res) => {
    const id = + req.params.id;   
    const productIndex = users.findIndex(p => p.id == id) 
    users.splice(productIndex, 1, {...product, ...req.body})  
    res.status(201).json()   
}
const deleteUser = (req, res) => {
    const id = + req.params.id;   
    const productIndex = users.findIndex(p => p.id == id) 
    const product = users[productIndex] 
    users.splice(productIndex, 1)  
    res.status(201).json(product) 
}


export  {createUser,getAllUser,getUser,replaceUser,updateUser,deleteUser}








// ye waala commonjs se chalega

// exports.createProduct = (req,res) => {  
//     console.log(req.body);
//     users.push(req.body)
//     res.status(201).json(req.body);
// }
// exports.getAllusers = (req, res) =>  {
//     res.json(users)
// }
// exports.getProduct =  (req,res ) => {
//     const id = + req.params.id;
//     const product = users.find(p=>p.id == id)
//     res.json(product);
// }   
// exports.replaceProduct = (req, res) => {
//     const id = + req.params.id;   
//     const product = users.findIndex(p => p.id == id) 
//     users.splice(productIndex, 1, { ...req.body, id: id })  
    
//     res.status(201).json(product)  
// }
// exports.updateProduct =(req, res) => {
//     const id = + req.params.id;   
//     const productIndex = users.findIndex(p => p.id == id) 
//     users.splice(productIndex, 1, {...product, ...req.body})  
//     res.status(201).json()   
// }
// exports.deleteProduct = (req, res) => {
//     const id = + req.params.id;   
//     const productIndex = users.findIndex(p => p.id == id) 
//     const product = users[productIndex] 
//     users.splice(productIndex, 1)  
//     res.status(201).json(product) 
// }