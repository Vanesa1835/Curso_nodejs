const express =require('express');

class Server{
    constructor(){
        this.app=express();
        this.PORT=process.env.PORT;
        
        this.routes();
    }

    routes(){
        this.app.get('/', function(req, res){res.send('Hola Ingeniero');});
    }

    listen (){
        this.app.listen(process.env.PORT); 
    }
} 

module.exports=Server;