/** CRUD OPERATION OF PRODUCT in NODE */
// import * as fs from 'fs'

// // const fs = require('fs')  // pehle type-module hatana padega package.json se 
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;


// // MVC model view controller 
// const createProduct = (req,res) => {   
//     console.log(req.body);
//     products.push(req.body)
//     res.status(201).json(req.body);
// }
// const getAllProducts = (req, res) =>  {
//     res.json(products)
// }
// const getProduct =  (req,res ) => {
//     const id = + req.params.id;
//     const product = products.find(p=>p.id == id)
//     res.json(product);
// }   
// const replaceProduct = (req, res) => {
//     const id = + req.params.id;   
//     const product = products.findIndex(p => p.id == id) 
//     products.splice(productIndex, 1, { ...req.body, id: id })  

//     res.status(201).json(product)  
// }
// const updateProduct =(req, res) => {
//     const id = + req.params.id;   
//     const productIndex = products.findIndex(p => p.id == id) 
//     products.splice(productIndex, 1, {...product, ...req.body})  
//     res.status(201).json()   
// }
// const deleteProduct = (req, res) => {
//     const id = + req.params.id;   
//     const productIndex = products.findIndex(p => p.id == id) 
//     const product = products[productIndex] 
//     products.splice(productIndex, 1)  
//     res.status(201).json(product) 
// }


// export  {createProduct,getAllProducts,getProduct,replaceProduct,updateProduct,deleteProduct}








// ye waala commonjs se chalega

// exports.createProduct = (req,res) => {  
//     console.log(req.body);
//     products.push(req.body)
//     res.status(201).json(req.body);
// }
// exports.getAllProducts = (req, res) =>  {
//     res.json(products)
// }
// exports.getProduct =  (req,res ) => {
//     const id = + req.params.id;
//     const product = products.find(p=>p.id == id)
//     res.json(product);
// }   
// exports.replaceProduct = (req, res) => {
//     const id = + req.params.id;   
//     const product = products.findIndex(p => p.id == id) 
//     products.splice(productIndex, 1, { ...req.body, id: id })  

//     res.status(201).json(product)  
// }
// exports.updateProduct =(req, res) => {
//     const id = + req.params.id;   
//     const productIndex = products.findIndex(p => p.id == id) 
//     products.splice(productIndex, 1, {...product, ...req.body})  
//     res.status(201).json()   
// }
// exports.deleteProduct = (req, res) => {
//     const id = + req.params.id;   
//     const productIndex = products.findIndex(p => p.id == id) 
//     const product = products[productIndex] 
//     products.splice(productIndex, 1)  
//     res.status(201).json(product) 
// }






/*** MONGOOSE SE DATA SHARE KARENGE AUR
 * CRUD OPERATIONS PERFORM KARENGE
//  */
// import Product from '../model/product.js'
// // const product = new Product();
// // MVC model view controller 
// const createProduct = (req, res) => {



//     const product = new Product(); // means new instance or copy of this class
//     product.title = 'PHONE X'
//     product.price = 9999
//     product.rating = 7
//     product.save((err, doc) =>   // to save and check error the data in database
//     {
//         console.log({ err, doc })
//         res.status(201).json(doc);  // isse humein output postman mein hi show ho jaayega kuynki doc given hai isme
//     }) 

// //**  isse chalane ke pehle vs code ke terminal par npm run dev  type karenge
// // phir iske liye postman ke post mein http://localhost:8080/products 
// // aur niche body ke raw mein kuch bhi jaise {"price":999} karke send karenge
// // lekin ye data sirf postman app mein text  ya phir json format mein set karke send karna hoga tabhi work karega 
// // to hamare vs code ke terminal mein ye upar ka data show hoga  ***

// }
// const getAllProducts = (req, res) => {

//     res.json(product)
// }
// const getProduct = (req, res) => {

//     // const product = new Product() // means new instance or copy of this class
//     // product.title = 'PHONE X';
//     // product.price = 9999;
//     // product.rating = 6;
//     // product.save((err, doc) =>   // to save and check error the data in database
//     // {
//     //     console.log({err,doc})
//     // })

//     const id = + req.params.id;
//     const product = product.find(p=>p.id == id)
//     res.json(product);
// }
// const replaceProduct = (req, res) => {
//     const id = + req.params.id;
//     const product = product.findIndex(p => p.id == id)
//     product.splice(productIndex, 1, { ...req.body, id: id })

//     res.status(201).json(product)
// }
// const updateProduct = (req, res) => {
//     const id = + req.params.id;
//     const productIndex = products.findIndex(p => p.id == id)
//     product.splice(productIndex, 1, { ...product, ...req.body })
//     res.status(201).json()
// }
// const deleteProduct = (req, res) => {
//     const id = + req.params.id;
//     const productIndex = products.findIndex(p => p.id == id)
//     const product = products[productIndex]
//     products.splice(productIndex, 1)
//     res.status(201).json(product)
// }


// export { createProduct, getAllProducts, getProduct, replaceProduct, updateProduct, deleteProduct }




// /** Ab hum data api se le jaayenge */
// // postman app se data mongodb mein bhejenge
// import Product from '../model/product.js'
// import mongoose from 'mongoose'

// const product = new Product()   // yahan humnein req.body di hai isse schema share ho jaayega
// // MVC model view controller 
// const createProduct = (req, res) => {

//     const product = new Product(req.body)   // yahan humnein req.body di hai isse schema share ho jaayega

//     product.save((err, doc) => {   // to save and check error the data in database
//         console.log({ err, doc })
//         //res.status(201).json(doc)  // isse humein output postman mein hi show ho jaayega kuynki doc given hai isme
//         //or
//         if (err) {
//             res.status(400).json(err);
//         } else {
//             res.status(201).json(doc);
//         }

//     });

//     //**  isse chalane ke pehle vs code ke terminal par npm run dev  type karenge
//     // phir iske liye postman ke post mein http://localhost:8080/products 
//     // aur niche body ke raw mein kuch bhi jaise 
//     // lekin postman mein ye deta json format mein send karenge tabhi hoga wahan par text ki jagah json set karna padega
//     /*        "title": "iPhone 9",
//             "description": "An apple mobile which is nothing like apple",
//             "price": 549,
//             "discountPercentage": 12.96,
//             "rating": 4.69,
//             "stock": 94,
//             "brand": "Apple",
//             "category": "smartphones",
//             "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//             "images": [
//                 "https://i.dummyjson.com/data/products/1/1.jpg",
//                 "https://i.dummyjson.com/data/products/1/2.jpg",
//                 "https://i.dummyjson.com/data/products/1/3.jpg",
//                 "https://i.dummyjson.com/data/products/1/4.jpg",
//                 "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//             ]
//     karke send karenge 
//     // to hamare vs code ke terminal mein ye upar ka data show hoga 
//     stock  chod ke kuyn schema mein stock present nahi hai***/

// }
// const getAllProducts = async (req, res) => {
//     const products = await Product.find();  // This is query of mongoose
//     // or
//     // const products = await Product.find({price:{$gt:500}});   // ismein query karenge ki price greater than 500 waale hi show honge

//     res.json(products)
//     //isme hum postman se get request par products karke data ke saath send karenge
//     // to humein database ke saare collection show honge
// }
// const getProduct = async (req, res) => {

//     const id = req.params.id; // ab data string ki tarah hi aayega isliye +req.params.id ki jaroorat nahi hai
//     const product = await Product.findById(id);   // ismein hum findById se query karenge
//     // kisi bhi collection ki id search karenge postman mein get request mein products/6454fd90d766993778f7f16a aise 
//     res.json(product);
// }

// //find one and replace
// const replaceProduct = async (req, res) => {
//     const id = req.params.id;
//     try {
//         const doc = await Product.findOneAndReplace({ _id: id }, req.body,{new:true})  //({schemaId: id}, replacementPart, abhi waale changes show honge)
//         res.status(201).json(doc)
//     } catch (err) {
//         console.log(err);
//         res.status(400).json(doc)
//     }
//     //issme hum put request karenge products/6454fd90d766993778f7f16a body mein iss id ka data dekar changes karke send karenge
//     // aur change ho jaayega wo sab data jo hum karna chahte hai 
// }
// const updateProduct = async (req, res) => {
//     const id = req.params.id;
//     try {
//         const doc = await Product.findOneAndUpdate({ _id: id }, req.body,{new:true})  //({schemaId: id}, replacementPart, abhi waale changes show honge)
//         res.status(201).json(doc)
//     } catch (err) {
//         console.log(err);
//         res.status(400).json(doc)
//     }
//     // patch request  karenge products/6454fd90d766993778f7f16a  mein body mein sirf discountPercentage dekar uski value change karke send karenge
//     // aur phir database mein discount ki value change ho jaayegi
// }
// const deleteProduct =async (req, res) => {
//     const id = req.params.id;
//     try {
//         const doc = await Product.findOneAndDelete({ _id: id })  //({schemaId: id}, replacementPart, abhi waale changes show honge)
//         res.status(201).json(doc)
//     } catch (err) {
//         console.log(err);
//         res.status(400).json(doc)
//     }
//     // ismein delete request karenge products/644d5ab7d0a4938a1065e583 ye waali request dekar koi data nahi denge aur send karenge
//     // phir ye waali id wala data database se delete ho jaayega
// }


// export { createProduct, getAllProducts, getProduct, replaceProduct, updateProduct, deleteProduct }








/** Ye data Reactjs (frontend mein use karenge):*/
/** Ab hum data api se le jaayenge */
// ye code upar waale ki tarah hai isliye saare comments remove kare diye hai
import Product from '../model/product.js'

const product = new Product()

const createProduct = (req, res) => {

    const product = new Product(req.body)   // yahan humnein req.body di hai isse schema share ho jaayega

    product.save((err, doc) => {   // to save and check error the data in database
        console.log({ err, doc })
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(doc);
        }

    });
}
const getAllProducts = async (req, res) => {
    const products = await Product.find();  // This is query of mongoose
    res.json(products)
}
const getProduct = async (req, res) => {

    const id = req.params.id; // ab data string ki tarah hi aayega isliye +req.params.id ki jaroorat nahi hai
    const product = await Product.findById(id);   // ismein hum findById se query karenge
    res.json(product);
}
const replaceProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndReplace({ _id: id }, req.body, { new: true })  //({schemaId: id}, replacementPart, abhi waale changes show honge)
        res.status(201).json(doc)
    } catch (err) {
        console.log(err);
        res.status(400).json(doc)
    }
}
const updateProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })  //({schemaId: id}, replacementPart, abhi waale changes show honge)
        res.status(201).json(doc)
    } catch (err) {
        console.log(err);
        res.status(400).json(doc)
    }
}
const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndDelete({ _id: id })  //({schemaId: id}, replacementPart, abhi waale changes show honge)
        res.status(201).json(doc)
    } catch (err) {
        console.log(err);
        res.status(400).json(doc)
    }
}
export { createProduct, getAllProducts, getProduct, replaceProduct, updateProduct, deleteProduct }
