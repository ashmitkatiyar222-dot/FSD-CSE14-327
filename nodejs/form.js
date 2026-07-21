const http =require('http');
const fs=require('fs');

  const server= http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>form</title></head>');
    res.write('<body><h1>enter your details</h1></body>')
    res.write('<form action="/form" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter Your Username"><br>');
    res.write('<br><input type="submit" value="submit">');
    res.write('</form>');
    res.write('</body>')

    res.write('</html>');
    res.end();
    }
    else if(req.url.toLowerCase()==="/form"&&req.method=="POST"){
        fs.writeFileSync('user.txt','Ashmit KAtiyar');
        res.statusCode=302;
        res.setHeader('Location','/');
        res.end();
    }
    else{res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>coding</title></head>');
    res.write('<body><h1>ji dsa bhi krna hai</h1></body>')
    res.write('</html>');
    res.end();

    }
    

   });
  

   server.listen(3000, () => {
    console.log(`Server running on address http://localhost:${3000}`);
});
 
   
