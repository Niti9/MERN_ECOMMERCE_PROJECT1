import express from 'express';

import {createProduct,getAllProducts,getProduct,replaceProduct,updateProduct,deleteProduct} from '../controller/product.js'

// Router method
const productRouter = express.Router()



//Model view controller
/*to make a callback to a function */
// Yahan server ki jagah productRouter name diya gaya hai
//isse niche iss way se bhi chala sakte hai
productRouter
    .post('/', createProduct)
    .get('/', getAllProducts)
    .get('/:id', getProduct )
    .put('/:id', replaceProduct)
    .patch('/:id', updateProduct)
    .delete('/:id', deleteProduct)

export default productRouter



// Pehle hum ye waala use karte the jab 
// index file mein /api use karte the ab 
// index file mein hum /products use karte hai 
//isliye hum ab iss file mein sirf / or /:id use karenge
// productRouter
//     .post('/products', createProduct)
//     .get('/products', getAllProducts)
//     .get('/products/:id', getProduct )
//     .put('/products/:id', replaceProduct)
//     .patch('/products/:id', updateProduct)
//     .delete('/products/:id', deleteProduct)



