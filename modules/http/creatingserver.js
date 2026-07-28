const http=require('http');



const server=http.createServer(function requestListener(req,res){
    console.log(req);
});

server.listen(3000);