const rq = require("amqplib/callback_api");

rq.connect("amqp://localhost",(err,connection)=>{
    if(err) {
        console.log(err);
        process.exit(); 
    }
    else{
        const queueName = "fabSeri2";
        connection.createChannel((err,channel)=>{
            channel.assertQueue(queueName,{durable:false});
            channel.consume(queueName,message =>{
                    console.log("Waiting for message");
                    console.log(`${queueName} - ${message.content.toString()}`);
            },{noAck:true});
        });
    }
});