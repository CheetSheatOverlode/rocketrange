var http = require("http");
var fs = require("fs");

http.createServer(function (req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    function savevalue() {
        var content = document.getElementById("userinput").value;
        document.getElementById("fuckass").innerHTML = "content";
        alert(content);
    }
    <html>
        <head>
            <title>It is Rocket Science!</title>
        </head>
        <body>
            <form>
                <input type="text" placeholder=2000 id="userinput"><br><br>
                <input type="submit" onclick="savevalue()" id="Calculate!"><br>
            </form>
            <p id="fuckass">I am the value haha</p>
        </body>
    </html>;
    res.end(content);
}).listen(80);
