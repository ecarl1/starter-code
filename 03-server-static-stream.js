const http = require('http'); //require going to be using http package in code
const fs = require("fs");
const path = require("path");
const hostname = 'localhost';
const port = '3000';

const server = http.createServer((req, res)=>{
    console.log(req.headers); //displaying the headers of the request
    if(req.method == 'GET'){
        let fileUrl = req.url;
        if(req.url == '/'){
            fileUrl = '/index.html';
        }
        let filePath = path.resolve('./public' + fileUrl);
        let fileExt = path.extname(filePath);
        if(fileExt == '.html'){
            fs.stat(filePath, (err, stat) => {
                if(err){
                    res.writeHead(404, {'Context-Type':'text/html'});
                    res.end('<html><body><h1>Error 404' + fileUrl + ' does not exist </h1></body></html>');
                }
                res.writeHead(200, {'Context-Type':'text/html'});
                fs.createReadStream(filePath).pipe(res);

            });
        }
        else{
            res.writeHead(404, {'Context-Type':'text/html'});
            res.end('<html><body><h1>Error 404' + fileUrl + ' does not exist </h1></body></html>');
        }
    }
    
});

server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname} : ${port}`)
});