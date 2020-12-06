var http = require("http");

http.createServer(function (req, res){

    res.writeHead(200, {"Content-Type": "text/html"});
    content=`
    <html>
        <head>
            <title>It is Rocket Science!</title>
        </head>
        <body>
            <form action="result">
                <input type="text" placeholder=2000 id="userinput"><br><br>
                <input type="submit" id="Calculate!"><br>
            </form>
        </body>
    </html>`;
    res.write(content);
    return res.end();
}).listen(80);
