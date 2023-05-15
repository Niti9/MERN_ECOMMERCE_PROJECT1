/** Here we used Scema and then  MODEL  from MONGOOSE */
// import mongoose from 'mongoose'
// const {Schema} = mongoose;  // calling schema



// // // Schema = import karenge data.json se aur mongoose ke  schema 
// // //format mein banayenge 
// // //This is configuration of product
// const productSchema = new Schema({

//   title: String,
//   description: String,
//   price: Number,
//   discountPercentage: Number,  // Number is format i.e can be int or float
//   rating: Number,
//   stock: Number,
//   brand: String,
//   category: String,
//   thumbnail: [ String ], // url bhi string hi lenge
//   images : [String]   // because  in data.json images are array of string     

//   });

// //mongoose model
// //  Ex :- const CollectionName = mongoose.model('collectionName', schemaName)
// const Product = mongoose.model('Product', productSchema);

// export default Product;






/** Now we will use BUILT IN VALIDATION  */


// import mongoose from 'mongoose'
// const {Schema} = mongoose;  // calling schema



// // // Schema = import karenge data.json se aur mongoose ke  schema 
// // //format mein banayenge 
// // //This is configuration of product
// const productSchema = new Schema({

//   // Basic  validation
//   // ex-:  There is also required field which is optional to use 
//   // but if true then we have to send that data
//   // title:{type:datatype, message:[],message2:[]}
//   // message can be min and message2 can be max , 
//   //and datatype can be String,Number  and unique true means title should be unique
//   title: {type:String, required:true , unique: true},
//   description: String,
//   price:  {type:Number, min:[0,'Wrong min price'],required: true},
//   discountPercentage: {type:Number, min:[0,'Wrong min discount'], max:[50,'Wrong max discount']},
//   rating: {type:Number, min:[0,'Wrong min rating'], max:[5,'Wrong max rating']},
//   stock: Number,
//   brand: {type:String, required: true},
//   category: {type:String, required:true},
//   thumbnail: {type:String, required:true }, // url bhi string hi lenge
//   images : [String]   // because  in data.json images are array of string     

//   });

// // ab hum postman mein ye data send karenge 
// // "title": "OPPOF19",
// //             "description": "OPPO F19 is officially announced on April 2021.",
// //             "price": 280,
// //             "discountPercentage": 17.91,
// //             "rating": 4.3,
// //             "stock": 123,
// //             "brand": "OPPO",
// //  phir jo data nahi bheja wo error dega ki required hai 
// // validate error aayega terminal mein 
// //isliye saari required details deni hogi usmein
// // agar min se low aur max se high value denge to validateError 
// // show hoga aur message min , max waala show hoga
// // aur jab saari details sahi denge tabhi jaakar mongodb database
// // mein detail save hongi warna nahi hogi




// //mongoose model
// //  Ex :- const CollectionName = mongoose.model('collectionName', schemaName)
// const Product = mongoose.model('Product', productSchema);

// export default Product;




/** Now we use this code in ReactJs (frontend) */
// comments or details uppar waale mein 
import mongoose from 'mongoose'
const {Schema} = mongoose;  // calling schema

const productSchema = new Schema({

  title: {type:String, required:true , unique: true},
  description: String,
  price:  {type:Number, min:[0,'Wrong min price'],required: true},
  discountPercentage: {type:Number, min:[0,'Wrong min discount'], max:[50,'Wrong max discount']},
  rating: {type:Number, min:[0,'Wrong min rating'], max:[5,'Wrong max rating']},
  stock: Number,
  brand: {type:String, required: true},
  category: {type:String, required:true},
  thumbnail: {type:String, required:true }, // url bhi string hi lenge
  images : [String]   // because  in data.json images are array of string     

  });

const Product = mongoose.model('Product', productSchema);

export default Product;