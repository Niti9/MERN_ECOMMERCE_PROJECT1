/* First example to print json data */

// import { createServer } from 'http';

// const data = {age:5};
// const server = createServer((req, res) => {

//      console.log('Server started')
//     res.setHeader('HeaderValue', 'Dummy')
//     res.setHeader('Content-type', 'application/json')
//      res.end(JSON.stringify( data));

//     res.end(data);

// })

// server.listen(8080)





/* To print a data of another file*/

// import { createServer } from 'http';

// // fs = require('fs');
// //  or 
// import * as fs from 'fs';

// const index = fs.readFileSync('index.html','utf-8')   //one time chalega


// const server = createServer((req, res) => {

//      console.log(req.url)
//     res.setHeader('Content-type','text/html')
//     res.end(index);

// })

// server.listen(8080)






/* To print data of a Json file */
// import { createServer } from 'http';

// // fs = require('fs');
// //  or 
// import * as fs from 'fs';

// const data = fs.readFileSync('data.json','utf-8')  

// const server = createServer((req, res) => {

//     console.log(req.url)
//     res.setHeader('Content-type','application/json')
//     res.end(data);

// })

// server.listen(8080)









//Using Switch cases to access different file [like json and index]

// import { createServer } from 'http';
// import * as fs from 'fs';

// const data = fs.readFileSync('data.json','utf-8')  
// const index = fs.readFileSync('index.html','utf-8')  

// const server = createServer((req, res) => {

//     console.log(req.url)
//     switch(req.url){
//         case'/':
//             res.setHeader('Content-type','text/html');
//             res.end(index);
//             break; // using break so case 1 or default will not throw response simultaneously
//         case'/api':
//             res.setHeader('Content-type','application/json')
//             res.end(data);
//             break;
//         default:
//             res.writeHead(404,'Error is Found'); // status code print 404 and printed message by default message is Not Found😁
//             res.end();

//     }

// })

// server.listen(8080)






















/* Replace data of a html file from json file  */
// import { createServer } from 'http';
// import * as fs from 'fs';

// const data = JSON.parse(fs.readFileSync('data.json','utf-8'))  // so that file can read in json format
// const index = fs.readFileSync('index.html','utf-8')  
// const product = data.products[0]; // for only first index value 


// const server = createServer((req, res) => {

//     console.log(req.url)



//     switch(req.url){
//         case'/':
//             res.setHeader('Content-type','text/html');
//             res.end(index);
//             break; // using break so case 1 or default will not throw response simultaneously
//         case'/api':
//             res.setHeader('Content-type','application/json')
//             res.end(JSON.stringify(data));
//             break;
//         case '/product':
//             res.setHeader('Content-Type','text/html');

//             // let modifiedIndex = index.replace('title',products.title)  // to replace only one data  
//             //for many replacement we simply add .replace after command
//             let modifiedIndex = index.replace('**title**',product.title)
//             .replace('**url**',product.body)
//             .replace('**price**',product.id)
//             res.end(modifiedIndex);
//             break;

//         default:
//             res.writeHead(404,'Error is Found'); // status code print 404 and printed message by default message is Not Found😁
//             res.end();

//     }

// })

// server.listen(8080)









/* create product page using startWith function also replace text of one html file by using  json file */
// import { createServer } from 'http';
// import * as fs from 'fs';

// const data = JSON.parse(fs.readFileSync('data.json','utf-8'))  // so that file can read in json format
// const index = fs.readFileSync('index.html','utf-8')  
// const products= data.products; // for complete json array data 


// const server = createServer((req, res) => {

//     console.log(req.url,req.method) //req.method show GET or POST 

// // to use more id from json data aur isliye bhi
// // kyunki agar /product search karenge to easily webpage access ho jaaye
// if(req.url.startsWith('/product')){     // product search start from this line

//     const id = req.url.split('/')[2]   // for second index
//      // (+id) isse number jaisi value string mein convert ho jaayegi 
//     const product = products.find(p=>p.id===(+id))  
//     console.log(product);
//          res.setHeader('Content-Type','text/html');

//             // let modifiedIndex = index.replace('title',products.title)  // to replace only one data  
//             //for many replacement we simply add .replace after command
//             let modifiedIndex = index.replace('**title**',product.title)  //**title se ye special ban jaayega html file mein aur hum iss ki value json data se change kar sakte hai  */
//             .replace('**url**',product.thumbnail)
//             .replace('**price**',product.price)
//             res.end(modifiedIndex);
//             return; // iske baad switch case mein nahi jaayega
// }

//     switch(req.url){
//         case'/':
//             res.setHeader('Content-type','text/html');
//             res.end(index);
//             break; // using break so case 1 or default will not throw response simultaneously
//         case'/api':
//             res.setHeader('Content-type','application/json')
//             res.end(JSON.stringify(data));
//             break;

//         default:
//             res.writeHead(404,'Error is Found'); // status code print 404 and printed message by default message is Not Found😁
//             res.end();

//     }

// })

// server.listen(8080 )











/* NOW WE LEARN EXPRESS */
// WE DON'T NEED UPPER CODE BECAUSE EXPRESS MAKE IT EASY FOR US IN COMPARISON OF NODE JS 


/* Here we used express and also used express command to send data,file,status */
// import * as fs from 'fs';

// const data = JSON.parse(fs.readFileSync('data.json','utf-8')) 
// const index = fs.readFileSync('index.html','utf-8');
// const products = data.products;

// import express from 'express';

// const server =express();  // calling express using server variable

// server.get('/',(req,res)=>{  //  send request and get response from server

//     // res.send('hello')   //send command to send message on browser

//     // res.sendFile('index.html')    //create error of path must be absolute 
//     // res.sendFile('/Node_programs/index.html')    //By using forward slash and path of the file we can access data

//     //  res.json(products) // for json data we can use this command

//     // res.sendStatus(201) //  send status 201 for created 
//     // res.status(201).send('<h1>hello</h1>') // we can also print some message 

// })


// // here we can also print  message in console 
// server.listen(8080, ()=>{
//     console.log('server started')
// })






/* Here we make some api or endpoint or routing */
// import * as fs from 'fs';

// const data = JSON.parse(fs.readFileSync('data.json','utf-8')) 
// const index = fs.readFileSync('index.html','utf-8');
// const products = data.products;

// import express from 'express';

// const server =express();  // calling express using server variable

// //API - Endpoint or Route
// //niche / slash routing karega aur upper /chal likhkar uppar ka data show hoga
// server.get('/',(req,res)=>{        // this command will show type:'GET' in browser simillarly niche bhi aisa hi hoga
//     res.json({type:'GET'})
// })
// server.get('/',(req,res)=>{
//     res.json({type:'POST'})
// })
// server.get('/',(req,res)=>{
//     res.json({type:'PUT'})
// })
// server.get('/',(req,res)=>{
//     res.json({type:'DELETE'})
// })

// // Yahan sirf get request chalegi
// // yahan post, put, delete command nahi chalegi sirf
// //  postman app par hi run kar sakte hai

// server.listen(8080, ()=>{
//     console.log('server started')
// })








/* making  a custom middleware */
// import * as fs from 'fs';

// const data = JSON.parse(fs.readFileSync('data.json','utf-8')) 
// const index = fs.readFileSync('index.html','utf-8');
// const products = data.products;

// import express from 'express';

// const server =express();  

// server.use((req,res,next)=>{
//     console.log(req.method,req.ip,req.hostname, new Date(),req.get('User-Agent'))      // Ye wahi data humeing dikhaayega jo humein chahiye
//     next()  // next command browser ko chalaayegi warna browser loading karta rahega
// })

// server.get('/',(req,res)=>{        //Yahan pehle waala GET1 hi sirf browser par show hoga
//     res.json({type:'GET1'})
// })
// server.get('/',(req,res)=>{
//     res.json({type:'GET2'})
// })


// server.listen(8080, ()=>{
//     console.log('server started')
// })






/* creating another middleware  and also using if else condition*/
// import express from 'express';

// const server = express();

// server.use((req, res, next) => {
//     console.log(req.method,
//                 req.ip, 
//                 req.hostname, 
//                 new Date(), 
//                 req.get('User-Agent'))      // Ye wahi data humeing dikhaayega jo humein chahiye
//     next()  // next command browser ko chalaayegi warna browser loading karta rahega
// })


// //another middleware contain if else condition
// const auth = (req, res, next) => {
//     console.log(req.query)

//     if (req.query.password) {   //yahan humeing localhost/?passwor=1232 kuch bhi number search karna padega
//         next()  // isse browser buffering nahi karega aur process hogi
//     }
//     // if(req.query.password=='123'){  //iss condition mein query sirf ?password=123 hi de sakenge
//     //     res.send('<h1>Your password match</h1>')
//     // }
//     else {
//         // res.sendStatus(401);
//          res.sendStatus(200);
//     }
// }

// server.use(auth)  //to call auth 

// //Route pass lagaya hai iss waale mein (auth)
// server.get('/', auth, (req, res) => {
//     res.json({ type: 'GET1' })
// })

// server.listen(8080, () => {
//     console.log('server started')
// })







/* using bodyParser (Part of middleware) */
// import express from 'express';

// const server = express();


// //bodyParser
// server.use(express.json())  // ye json ke data ko samjhega

// /**** static file hosting command  */  //Part of built in middleware
// server.use(express.static('MyFolder')) //Ye command folder se sidha file ko host kar degi aur hum /file ka name se search karke use dekh sakte hai 
// // aur agar phir back jaakar sirf / se enter karenge to bhi by default index.html waali file hi show karega
// //kyunki index hi by default browser mein search hota aur open hota hai

// server.use((req, res, next) => {
//     console.log(req.method,
//                 req.ip, 
//                 req.hostname, 
//                 new Date(), 
//                 req.get('User-Agent'))      
//     next() 
// })

// //another middleware contain if else condition
// const auth = (req, res, next) => {
//     console.log(req.query)

//     if (req.query.password) {   
//         next()  
//     }
//     else {
//         res.sendStatus(200);
//     }
// }

// server.use(auth)  //to call auth 

// //Route pass lagaya hai iss waale mein (auth)
// server.get('/', auth, (req, res) => {
//     res.json({ type: 'GET1' })
// })

// server.listen(8080, () => {
//     console.log('server started')
// })











/* using Third party middleware  first one is morgan*/
// import express from 'express';
// import morgan from 'morgan';  // import morgan and install using npm i morgan

// const server = express();



// //bodyParser
// server.use(express.json())  // ye json ke data ko samjhega


// //third party middleware
// server.use(morgan('dev')) // passing argument as dev with in this command
// // we also can use
// server.use(morgan('default')) // to see more details on backend 


// /**** static file hosting command  */  //Part of built in middleware
// server.use(express.static('MyFolder')) //Ye command folder se sidha file ko host kar degi aur hum /file ka name se search karke use dekh sakte hai 
// // aur agar phir back jaakar sirf / se enter karenge to bhi by default index.html waali file hi show karega
// //kyunki index hi by default browser mein search hota aur open hota hai


// //another middleware contain if else condition
// const auth = (req, res, next) => {
//     console.log(req.query)

//     if (req.query.password) {   
//         next()  
//     }
//     else {
//         res.sendStatus(200);
//     }
// }

// server.use(auth)  //to call auth 

// //Route pass lagaya hai iss waale mein (auth)
// server.get('/', auth, (req, res) => {
//     res.json({ type: 'GET1' })
// })

// server.listen(8080, () => {
//     console.log('server started')
// })








/** url searching yahan hum static searching karenge */
// import express from 'express';

// const server = express();

// //another middleware contain if else condition
// const auth = (req, res, next) => {
//    next()
// }

// server.use(auth)  //to call auth 



// //API -Endpoint -Route
// //isse hum routing karenge aur humeing aise search karna padega (/product/5)
// server.get('/product/:id', auth, (req, res) => {
//     // yahan hum product/?id=abc search nahi karenge 
//     //humein product/abc ya phir product/3 aise search karna padega
//     console.log(req.params) // it will show id and key like( {id:'5'} aise hi jo bhi hum search karenge wo id: 'search' ban jaayega)
//     res.json({ type: 'GET' })
// })




// //Route pass lagaya hai iss waale mein (auth)
// server.get('/', auth, (req, res) => {
//     res.json({ type: 'GET1' })
// })

// server.listen(8080, () => {
//     console.log('server started')
// })












/**creating rest api of products*/
/**GET request */
// import express from 'express';
// import * as fs from 'fs'

// const server = express();

// const data  = JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products  = data.products;

// server.use(express.json());


// //auth se related humnein sab remove kar diya hai

// //API -Endpoint -Route
// //API ROOT, base URL, google.com/
// //Read GET /products
// server.get('/products', (req, res) => {
//     res.json(products)
// })

// //Read GET /products/:id
// server.get('/products/:id', (req, res) => {
//     // console.log(req.params.id) // sirf search ki hui value milegi
//     //or
//     const id = + req.params.id;   // yahan hum search karte hai string aur usse + sign laga kar number mein change karenge
//     const product = products.find(p=>p.id == id) //find karenge products se  (json.id == uppar waali id )
//     res.json(product) // ab humein search ki hui value ka hi json data milega sirf
// })



// server.listen(8080, () => {
//     console.log('server started')
// })










/**creating rest api of products*/
/** Post reques but only use in postman app */
// import express from 'express';
// import * as fs from 'fs'

// const server = express();

// const data  = JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products  = data.products;

// server.use(express.json());


// //auth se related humnein sab remove kar diya hai

// //API -Endpoint -Route
// //API ROOT, base URL, google.com/
// //Read GET /products
// server.get('/products', (req, res) => {
//     res.json(products)
// })

// //Read GET /products/:id
// server.get('/products/:id', (req, res) => {
//     // console.log(req.params.id) // sirf search ki hui value milegi
//     //or
//     const id = + req.params.id;   // yahan hum search karte hai string aur usse + sign laga kar number mein change karenge
//     const product = products.find(p=>p.id == id) //find karenge products se  (json.id == uppar waali id )
//     res.json(product) // ab humein search ki hui value ka hi json data milega sirf
// })


// // Create POST /products
// // ye post request hum sirf postman app par use karenge aur 
// // iski help se hu;m json data change karenge aur phir apne console par changed
// //data lenge phir usse apni json file mein change kar denge
// server.post('/products', (req, res) => {
//     console.log(req.body) //to get change data in console we request of body and express.json() command help karegi
//     products.push(req.body) 
//     res.status(201).json(req.body)
// })


// server.listen(8080, () => {
//     console.log('server started')
// })








/**creating rest api of products*/
/** Put request but only use in postman app */
// import express from 'express';
// import * as fs from 'fs'

// const server = express();

// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;

// server.use(express.json());


// //auth se related humnein sab remove kar diya hai

// //API -Endpoint -Route
// //API ROOT, base URL, google.com/
// //Read GET /products
// server.get('/products', (req, res) => {
//     res.json(products)
// })


// //Read UPDATE /products/:id
// server.put('/products/:id', (req, res) => {
//     // console.log(req.params.id) // sirf search ki hui value milegi
//     //or
//     const id = + req.params.id;   // yahan hum search karte hai string aur usse + sign laga kar number mein change karenge
//     const productIndex = products.findIndex(p => p.id == id) //Yahan hum original json data ko update karenge index ki help se
//     products.splice(productIndex, 1, { ...req.body, id: id })  //To  change   (NameOfArray,deleteFirstIndex,newObject)  //new object has spread operator and then humnei di ID

//     res.status(201).json() // status hoga 201 jo frontend waale ko dega 
// })

// server.listen(8080, () => {
//     console.log('server started')
// })










/**creating rest api of products*/
/** Patch request but only use in postman app */
// import express from 'express';
// import * as fs from 'fs'

// const server = express();

// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;

// server.use(express.json());

// //API -Endpoint -Route
// //API ROOT, base URL, google.com/
// //Read GET /products
// server.get('/products', (req, res) => {
//     res.json(products)
// })


// //Read UPDATE /products/:id
// //update mein value update hoyegi par humaare code ke according wo 
// //- 2 parts mein divide ho jaayegi 
// server.put('/products/:id', (req, res) => {
//     // console.log(req.params.id) // sirf search ki hui value milegi
//     //or
//     const id = + req.params.id;   // yahan hum search karte hai string aur usse + sign laga kar number mein change karenge
//     const product = products.findIndex(p => p.id == id) //Yahan hum original json data ko update karenge index ki help se
//     products.splice(productIndex, 1, { ...req.body, id: id })  //To  change   (firstIndex,deleteIndex,newObject)  //new object has spread operator and then humnei di ID

//     res.status(201).json() // status hoga 201 jo frontend waale ko dega 
//     //or
//     //  res.json(product) // ab humein search ki hui value ka hi json data milega sirf
// })

// //UPDATE PATCH /products/:id
// //patch mein hum koi bhi value change kar sakte hai
// server.patch('/products/:id', (req, res) => {
//     const id = + req.params.id;   // yahan hum search karte hai string aur usse + sign laga kar number mein change karenge
//     const productIndex = products.findIndex(p => p.id == id) //Yahan hum original json data ko update karenge index ki help se
//     const product = products[productIndex] // product mein hum products ki index value use karenge
//     products.splice(productIndex, 1, {...product, ...req.body})  //To  change   (firstIndex,deleteIndex,newObject)  //new object has spread operator and then humnei di ID
//    //req.body pehle waale spread operator (product) ko override kar dega aur value show karega jo hum change karna chahte hai
//     //upar humnei product par bhi spread operator use kiya hai 
//     //aur id:id remove kar diya kyunki ismein puraani id hogi
//     res.status(201).json()   
// })

// server.listen(8080, () => {
//     console.log('server started')
// })







/**creating rest api of products*/
/** Delete request but only use in postman app */
// import express from 'express';
// import * as fs from 'fs'

// const server = express();

// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;

// server.use(express.json());

// //API -Endpoint -Route
// //API ROOT, base URL, google.com/
// //Read GET /products
// server.get('/products', (req, res) => {
//     res.json(products)
// })


// //Read UPDATE /products/:id
// //update mein value update hoyegi par humaare code ke according wo 
// //- 2 parts mein divide ho jaayegi 
// server.put('/products/:id', (req, res) => {
//     // console.log(req.params.id) // sirf search ki hui value milegi
//     //or
//     const id = + req.params.id;   // yahan hum search karte hai string aur usse + sign laga kar number mein change karenge
//     const product = products.findIndex(p => p.id == id) //Yahan hum original json data ko update karenge index ki help se
//     products.splice(productIndex, 1, { ...req.body, id: id })  //To  change   (firstIndex,deleteIndex,newObject)  //new object has spread operator and then humnei di ID

//     res.status(201).json() // status hoga 201 jo frontend waale ko dega 
//     //or
//     //  res.json(product) // ab humein search ki hui value ka hi json data milega sirf
// })

// //UPDATE PATCH /products/:id
// //patch mein hum koi bhi value change kar sakte hai
// server.patch('/products/:id', (req, res) => {
//     const id = + req.params.id;   // yahan hum search karte hai string aur usse + sign laga kar number mein change karenge
//     const productIndex = products.findIndex(p => p.id == id) //Yahan hum original json data ko update karenge index ki help se
//     const product = products[productIndex] // product mein hum products ki index value use karenge
//     products.splice(productIndex, 1, {...product, ...req.body})  //To  change   (firstIndex,deleteIndex,newObject)  //new object has spread operator and then humnei di ID
//    //req.body pehle waale spread operator (product) ko override kar dega aur value show karega jo hum change karna chahte hai
//     //upar humnei product par bhi spread operator use kiya hai 
//     //aur id:id remove kar diya kyunki ismein puraani id hogi
//     res.status(201).json()   
// })

// //Delete  /products/:id
// server.patch('/products/:id', (req, res) => {
//     const id = + req.params.id;   // yahan hum search karte hai string aur usse + sign laga kar number mein change karenge
//     const productIndex = products.findIndex(p => p.id == id) //Yahan hum original json data ko update karenge index ki help se
//     const product = products[productIndex] // product mein hum products ki index value use karenge
//     products.splice(productIndex, 1)  //To  change   (firstIndex,deleteIndex,newObject)  //new object has spread operator and then humnei di ID
//     res.status(201).json(product)   
// })


// server.listen(8080, () => {
//     console.log('server started')
// })








/* Making API and using MVC (model view controller)*/ 
// import express from 'express';
// import * as fs from 'fs'

// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;

// const server = express();


// server.use(express.json());

// //MVC model view controller  use karenge agle usme
// const createProduct = (req,res) =>{   //creating a function
//     console.log(req.body);
//     products.push(req.body)
//     res.status(201).json(req.body);
// }
// const getAllProducts = (req, res) => {
//     res.json(products)
// }
// const getProduct =   (req,res ) => {
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

// /*to make a callback to a function */

// //Post /products
// server.post('/products', createProduct)  
// //Get /products
// server.get('/products', getAllProducts)
// //Get /products:id
// server.get('/products/:id', getProduct )
// //Read UPDATE /products/:id
// server.put('/products/:id', replaceProduct)
// //UPDATE PATCH /products/:id
// server.patch('/products/:id', updateProduct)
// //Delete  /products/:id
// server.delete('/products/:id', deleteProduct)

// server.listen(8080, () => {
//     console.log('server started')
// })





/* MVC (MODEL VIEW CONTROLLER) is used */
// humne file banayi hai controller mein product.js wahan code save kiya hai 
//yahan uss file ko import karenge

// YE WAALE CODE KE LIYE PACKAGE.JSON MEIN 
// TYPE SE MODULE HATANA PADEGA AUR COMMONJS USE KARNA PADEGA
// const express = require('express')
// const productController = require('./controller/product')

// const server = express();

// server.use(express.json());


// /*to make a callback to a function */

// //Post /products
// server.post('/products', productController.createProduct)  
// //Get /products
// server.get('/products', productController.getAllProducts)
// //Get /products:id
// server.get('/products/:id', productController.getProduct )
// //Read UPDATE /products/:id
// server.put('/products/:id', productController.replaceProduct)
// //UPDATE PATCH /products/:id
// server.patch('/products/:id', productController.updateProduct)
// //Delete  /products/:id
// server.delete('/products/:id', productController.deleteProduct)

// server.listen(8080, () => {
//     console.log('server started')
// })














// // Ye waala type ES6 mein chalna chahiye par error aa rha hai
// import express from 'express';

// const server = express();

// import {createProduct,getAllProducts,getProduct,replaceProduct,updateProduct,deleteProduct} from './controller/product.js'
// server.use(express.json());


// /*to make a callback to a function */

// //Post /products
// server.post('/products', createProduct);
// //Get /products
// server.get('/products', getAllProducts);
// //Get /products:id
// server.get('/products/:id', getProduct )
// //Read UPDATE /products/:id
// server.put('/products/:id', replaceProduct)
// //UPDATE PATCH /products/:id
// server.patch('/products/:id', updateProduct)
// //Delete  /products/:id
// server.delete('/products/:id', deleteProduct)

// server.listen(8080, () => {
//     console.log('server started')
// })







/* Using Express Router */
// import express from 'express';

// const server = express();
// // Router method
// const productRouter = express.Router()



// import {createProduct,getAllProducts,getProduct,replaceProduct,updateProduct,deleteProduct} from './controller/product.js'

// //bodyParser
// server.use(express.json());
// server.use('/api',productRouter) // aur humein koi bhi file /api/products/:id aise search karni pdegi

// //Model view controller
// /*to make a callback to a function */
// // Yahan server ki jagah productRouter name diya gaya hai
// //isse niche iss way se bhi chala sakte hai
// productRouter
//     .post('/products', createProduct)
//     .get('/products', getAllProducts)
//     .get('/products/:id', getProduct )
//     .put('/products/:id', replaceProduct)
//     .patch('/products/:id', updateProduct)
//     .delete('/products/:id', deleteProduct)

// server.listen(8080, () => {
//     console.log('server started')
// })







// /* put that MVC code into another file and used with this code*/
// import express from 'express';
// import productRouter  from "./routes/product.js";
// import userRouter from './routes/user.js';
// const server = express();

// //bodyParser
// server.use(express.json());
// server.use(express.static('MyFolder')) // Ye wala MyFolder ki files ko static host karega
// server.use('/products',productRouter) // ab humein /products or /products/:id  search karna padega 
// server.use('/users',userRouter) // ab hum  /users or /users/:id se search kar sakte hai

// server.listen(8080, () => {
//     console.log('server started')
// }) 








// /*****        MONGOOSE FOR DATABASE    *********/
// // npm install mongoose
// import mongoose from 'mongoose'
// import express from 'express';
// import productRouter  from "./routes/product.js";
// import userRouter from './routes/user.js';
// const server = express();

// //DB or DATABASE  connection 
// // mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');

// //OR

// //To check that database mongoose connect or not?
// main().catch(err => console.log(err));  // agar error hoga to catch block handle kar lega

// async function main()
// {
//     await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
//     console.log('database connected');   
// }



// //bodyParser
// server.use(express.json());
// server.use(express.static('MyFolder')) // Ye wala MyFolder ki files ko static host karega
// server.use('/products',productRouter) // ab humein /products or /products/:id  search karna padega 
// server.use('/users',userRouter) // ab hum  /users or /users/:id se search kar sakte hai

// server.listen(8080, () => {
//     console.log('server started')
// }) 







// // Using SCHEMAS  in mongoose
// import mongoose from 'mongoose'
// import express from 'express';
// import productRouter  from "./routes/product.js";
// import userRouter from './routes/user.js';
// const server = express();
// const {Schema} = mongoose;  // calling schema


// //To check that database mongoose connect or not?
// main().catch(err => console.log(err));  // agar error hoga to catch block handle kar lega

// async function main()
// {
//     await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
//     console.log('database connected');   
// }

// //Schema = import karenge data.json se aur mongoose ke  schema 
// //format mein banayenge 
// const productSchema = new Schema({

//     title:String,
//     description: String,
//     price: Number,
//     discountPercentage: Number,  // Number is format i.e can be int or float
//     rating: Number,
//     stock: Number,
//     brand: String,
//     category: String,
//     thumbnail: String, // url bhi string hi lenge
//     images : [ String ] // because  in data.json images are array of string     

//   });



// //bodyParser
// server.use(express.json());
// server.use(express.static('MyFolder')) // Ye wala MyFolder ki files ko static host karega
// server.use('/products',productRouter) // ab humein /products or /products/:id  search karna padega 
// server.use('/users',userRouter) // ab hum  /users or /users/:id se search kar sakte hai

// server.listen(8080, () => {
//     console.log('server started')
// }) 





// /**Using Mongoose model to use schemas
// // Humne model folder ki product.js mein schema aur model 
// // ka code rakha hai aur usse iss file mein import kar rhe hai */

// import express from 'express';
// import mongoose from 'mongoose'
// import productRouter  from "./routes/product.js";
// import userRouter from './routes/user.js';
// const server = express();



// //To check that database mongoose connect or not?
// main().catch(err => console.log(err));  // agar error hoga to catch block handle kar lega
// async function main()
// {
//     await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
//     console.log('database connected');   

// }


// //bodyParser
// server.use(express.json());
// server.use(express.static('MyFolder')) // Ye wala MyFolder ki files ko static host karega
// server.use('/products',productRouter) // ab humein /products or /products/:id  search karna padega 
// server.use('/users',userRouter) // ab hum  /users or /users/:id se search kar sakte hai

// server.listen(8080, () => {
//     console.log('server started')
// }) 







/** Ab hum code ReactJs mein use karenge  */
// // comments or details uppar waalon  mein hai
// // install npm i cors (Middleware)to communicate nodejs server to reactjs server
// import express from 'express';
// import mongoose from 'mongoose'
// import productRouter  from "./routes/product.js";
// import userRouter from './routes/user.js';
// import cors from 'cors';
// const server = express();
 
// main().catch(err => console.log(err));  // agar error hoga to catch block handle kar lega
// async function main()
// {
//     await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
//     console.log('database connected');   

// }
// //bodyParser
// server.use(cors()); //calling cors middleware
// server.use(express.json());
// server.use(express.static('MyFolder')) // Ye wala MyFolder ki files ko static host karega
// server.use('/products',productRouter) // ab humein /products or /products/:id  search karna padega 
// server.use('/users',userRouter) // ab hum  /users or /users/:id se search kar sakte hai

// server.listen(8080, () => {
//     console.log('server started')
// }) 



/** we also used npm run build
 * in nodejs_website
 * and then in cd build
 * then  npm i -g http-server
 * to make static server 
 * then go on server using that link
 * phir us build folder ko nodejs_website
 * se uthakar node ke Myfolder mein daalenge
 */


/**CHAPTER -9 DEPLOYING MERN APP ON CLOUD
 * 
 * pehle hum mongodb atlas cluster browser par
 *  open karke mongodb compass se connect karenge
 * aur same link hum yahan mongoose.connect mein use karenge /database ka name bhi lenge
 aur password username dena hoga
 * Yahan humne build folder bahar nikala myfolder se aur niche 
* static banane ke liye express.static se myfolder ki jagah
* build likhenge to ab jab hum localhost:8080/ search karenge
* to ye myfolder ki jagah build ko lekar aayega bas ek baar server phir se start karna hoga
/** */

import express from 'express';
import mongoose from 'mongoose'
import productRouter  from "./routes/product.js";
import userRouter from './routes/user.js';
import path from 'path';
import cors from 'cors';
const server = express();
main().catch(err => console.log(err));  // agar error hoga to catch block handle kar lega
async function main()
{
    
    // await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    await mongoose.connect('mongodb+srv://NewUser:NewPassword@cluster0.0shci4t.mongodb.net/ecommerce');
    console.log('database connected');   

}  
//bodyParser
server.use(cors()); //calling cors middleware
server.use(express.json());
server.use(express.static('build')) // Ye wala MyFolder ki files ko static host karega
server.use('/products',productRouter) // ab humein /products or /products/:id  search karna padega 
server.use('/users',userRouter) // ab hum  /users or /users/:id se search kar sakte hai

// for add page of react in node
server.use('*',(req,res)=>{
    res.sendFile(path.resolve('build','index.html'))
})
// OR 
// // this is the normal way only using forward slash using here instead of backward slash
// server.use('*',(req,res)=>{
//     res.sendFile('E:/Node_programs/build/index.html')
// })

server.listen(8080, () => {
    console.log('server started')

}) 



