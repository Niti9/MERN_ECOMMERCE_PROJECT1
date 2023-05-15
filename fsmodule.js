import { readFile } from 'fs';
import { createServer } from 'http';

const server = createServer((req,res)=>{

     console.log('Server started');
    //  res.setHeader('HeaderValue','Dummy');
    //     // res.end(JSON.stringify( data));
    res.end('<h1>Hello</h1>');

})

server.listen(8080)

//first we have to create txt file after it will execute
readFile('file.txt','utf8',(err,data)=>{
    console.log(err,data)
})
//This statement will first execute than other
console.log("Finished reading file")

