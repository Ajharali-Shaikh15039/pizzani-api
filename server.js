const { urlencoded } = require('body-parser');

const express=require('express');

const server=express();

server.use(express.json());

server.use(express.urlencoded({extended:true}));

const cors= require('cors');
const corsOptions={origin:"http://localhost:4200"};
server.use(cors(corsOptions));
const port=3000;

server.get('/',(req,res)=>{
    res.send("Hello server has started");
})

require('./myapp/app-route')(server);

server.listen(port,()=>{
    console.log(`http://localhost:${port}/app listening`);
})