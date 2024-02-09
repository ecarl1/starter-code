const http = require('http'); //require going to be using http package in code
const hostname = 'localhost';
const port = '3100';

const server = http.createServer((req, res)=>{
    console.log(req.headers); //displaying the headers of the request

    res.writeHead(200, {'Content-Type':'text/html'}) 
    res.end('<html><body><h1>Hello World</h1></body></html>');
});

server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname} : ${port}`)
});