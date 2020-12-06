var http = require("http");
var fs = require("fs");

http.createServer(function (req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    function savevalue() {
        var input = document.getElementById("coh");
        }
    res.write(input);
    <html>
        <head>
            <title>It is Rocket Science!</title>
            <style>
            </style>
        </head>
        <body>
            <form>
                <label for="coh">Target Orbital Height (KM):</label><br>
                <input type="text" id="coh" name="coh" value=2000><br><br>
                <input type="submit" id="submit" name="submit" value="Calculate!" onclick="savevalue()"><br>
            </form>
        </body>
    </html>`;
    res.end(content);
}).listen(80);
