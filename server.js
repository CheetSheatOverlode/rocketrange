var http = require("http");
var fs = require("fs");

http.createServer(function (req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    function savevalue() {
        var content = document.getElementById("coh").value;
        document.getElementById("fuckass").innerHTML = "content";
        alert(content);
    }
    <html>
        <head>
            <title>It is Rocket Science!</title>
        </head>
        <body>
            <form>
                <label for="coh">Target Orbital Height (KM):</label><br>
                <input type="text" id="coh" name="coh" value=2000><br><br>
                <input type="submit" id="submit" name="submit" value="Calculate!" onclick="savevalue()"><br>
            </form>
            <p id="fuckass">I am the value haha</p>
        </body>
    </html>;
    res.end(content);
}).listen(80);
