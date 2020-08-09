const http = require('http');
const express= require('express');
const Server = http.createServer((request,respond)=>{
    const url = request.url;
    if  (url=== '/')
    {
        respond.setHeader('Content-Type','text/html');
        respond.write('<html>');
        respond.write('<head><title>Enter Messange</title> </head>');
        respond.write('<body><form action ="/message" method ="post"><input type="text" name ="message"><button type="submit"> S  end </button></form> </body>');
        respond.write('</html>');
        return respond.end();
    }
    
    respond.setHeader('Content-Type','text/html');
    respond.write('<html>');
    respond.write('<head><title>node js project</title> </head>');
    respond.write('<body>Welcome to  HTML SERVER</body>');
    respond.write('</html>');
    respond.end();
    });
    const app = express();
    app.use((request, response, next)=>{
    console.log('in the middlwware');
    next();// ALlow the request to continue to the next midddleware in line

});

app.use((request, response, next)=>{
    console.log('in the middlwware 2 ');
    response.send( '<h1>hello from expres</h>');
  

});
const server= http.createServer(app);
server.listen(3000);