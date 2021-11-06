// const Logger = require('./reference/logger');
// const logger = new Logger()

// logger.on('message',(data)=>console.log(`Called Listener`,data))
// logger.log('Hello World')

//http 
const http = require('http');
const path = require ('path')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        // about can change to index
        fs.readFile(
            path.join(__dirname,'public','index.html'),
            (err,content)=>{
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(content) //nodemon will keep watching
        })
        
    }

    if(req.url ==='/about'){
        // about can change to index
        fs.readFile(
            path.join(__dirname,'public','about.html'),
            (err,content)=>{
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(content) //nodemon will keep watching
        })
        
    }
    // REST API. JSON content
    if(req.url ==='/api/users'){
     const users = [
         {name: 'Bob Smith', age:40},
         {name: 'John Doe', age:30},
     ]    
     res.writeHead(200,{'Content-Type':'application/json'});
     res.end(JSON.stringify(users))
    }

})
const PORT = process.env.PORT || 5000
server.listen(PORT, ()=>console.log('Server running on port ',PORT))