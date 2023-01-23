var fs=require('fs');
var http=require('http');


var server=http.createServer(function (req,res) {
 if (req.url="/"){

     //asy
     //fs.readFile('home.html', function (error,data){
            //res.writeHead(200,{'content-Type':'text/html'});
            //res.write(data);
            //res.end();
      fs.writeFile('demo.txt','hello world',function (error) {

          if(error){
              res.writeHead(200,{'content-Type':'text/html'});
              res.write("file write fail");
              res.end();
          }
          else {
              res.writeHead(200,{'content-Type':'text/html'});
              res.write("file write success");
              res.end();
          }

      });

     }


});
server.listen(4040);
console.log("server run");