var http = require("http");
var fs = require("fs");

http.createServer(function (req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    var content = `
    <html>
        <head>
            <title>It is Rocket Science!</title>
        </head>
        <body>
            <p>Changing output format...</p>
        </body>
    </html>`;
    res.end(data);
}).listen(80);