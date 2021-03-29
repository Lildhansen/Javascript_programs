const fs = require('fs');
const http = require('http');

http.createServer((req,res)=>
    {
        //res.write('what to write in document i localhost');
        res.end();
    }).listen(5000,()=> console.log("console message to us in terminal"))
.POST(("/"),(req,res) =>
      {
          console.log("Request");
      })

