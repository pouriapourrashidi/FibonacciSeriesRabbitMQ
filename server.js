const { response } = require("express");
const express = require("express");
const { request } = require("http");
const fabQueue1 = require("./Queues/Fab_queue1");
const fabQueue2 = require("./Queues/Fab_queue2");


const app = express();

// http://127.0.0.1:3001/?number=30
app.get("/",(request,response) => {
    let num = request.query.number;
    
    if (num%2===0){
        fabQueue1(num);
    }else{
        fabQueue2(num);
    }

    response.send(`<h3>We received your request</h3>`);
    
});

const port=3001;
const hostName = '127.0.0.1';
app.listen(port,hostName,()=>{console.log("Server is listening ... ")});


