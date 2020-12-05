var http = require("http");
var fs = require("fs");

http.createServer(function (req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    var content = `
    <html>
        <head>
            <title>It is Rocket Science!</title>
            <style>
            p {
                background-color:blue;
            }
            </style>
        </head>
        <body>
            <script>alert("hello")</script>
            <p>Changing output format...</p>
        </body>
    </html>`;
    res.end(content);
}).listen(80);