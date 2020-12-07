var http = require("http");

http.createServer(function (req, res){
    if (req.url.slice(0, 4) == "/api") {
        //Request Inputs
        var coh = parseFloat(req.url.slice(5));

        //Establish Constants
        const g0 = 9.81;
        const gm = 398600;
        const d = 12756;
        const mass = 5.97*10**24;
        const pi = 3.14159265358979323846;

        //Calculate
        var R = d/2 + coh;
        var orbitSpeed = (((gm/R)**0.5)*1000).toFixed(4);
        var orbitTime = Math.round((2*pi*R)/(orbitSpeed/1000));
        var escapeVelocity = ((((2*gm)/R)**0.5) * 1000).toFixed(4);

        //Output
        res.write("<title>This is Rocket Science! | API</title>")
        res.write('<p id="orbitSpeed">' + orbitSpeed.toString() + '</p>');
        res.write('<p id="orbitTime">' + orbitTime.toString() + '</p>');
        res.write('<p id="escapeVelocity">' + escapeVelocity.toString() + '</p>');
        res.end();
    } else {
        var content = `
        <html>
            <head>
                <title>This is Rocket Science! | Orbit Speed Calculator</title>
            </head>
            <body>
                <h1>Orbit Speed Calculator</h1>
                Huh? You don't know what that is? That's ok! We got you. After all, this IS rocket science, and 
                rocket science is hard. Ok, so first things first! Newton's 3 laws of motion. I assume you've heard 
                of it before, and just to be extra sure, I put them right here:
                <br><br>
                1. An object at rest will remain at rest until acted upon. An object in motion will remain in 
                motion until acted upon. <br>
                2. Force = Mass x Acceleration.<br>
                3. For every action, there is an equal and opposite re-action.
                <br><br>
                So, what do they mean? Well, the first one is pretty simple. An object at rest 
                will remain at rest until some external force acts on it. So, if we put an apple on a table, and 
                nothing does anything to it, then it's not going anywhere. If it does move, it's because of a force,
                even if we don't know what that force is. Maybe I pushed it, maybe the wind blew on it, maybe
                the table disappeared and gravity pulled it down.
                <br><br>
                But wait. What is a force? Well, it's not that simple. Some might say a force is a push or pull, but 
                not the only thing a force can be. A force is anything that causes <i>acceleration</i>, or a change in
                <i>velocity</i>. In other words, a force is something that causes a massive object to change speed,
                and acceleration is the change in speed (for now, think of speed and velocity as the same thing).
                <br><br>
                Ok, we got that cleared up. An object cannot move unless there is a force on it, and a moving object 
                cannot stop moving unless a force causes it to stop (like friction. Friction is a force).
                Next, let's explore Newton's second law.
                <br><br>
                "Force = Mass x Acceleration" hmmmm seems like a formula. What does it mean? Well, first we must set our
                units. Force is measured in "Newtons", and shows how much force is being used on an object. Mass is 
                measured in Kilograms. Acceleration is measured in m/s^2, or meters per second, every second, because 
                acceleration is the <i>change</i> in veloctiy, not the actual velocity. This is a very useful formula, 
                and is good for measuring how much force is being acted on an object. It also shows that a moving object
                without any force on it will be moving, but its velocity (speed, remember?) doesn't change.
                <br><br>
                Alright, on to Newton's 3rd law! For every action, there is an equal and opposite re-action. Basically,
                if Object B exerts a force on Object A, object A will also be exerting a force on object B. This kind of
                makes sense, because if you think about it, if you try to push a wall, the wall will feel your "push," and
                you will feel something pushing against you (or at least your hands will). This is very important in 
                rocket science, because rockets that push out a propellant (exerting a force) will cause the fuel to go
                one way, but then the pushed fuel causes the rocket to go the other way. That's just how rockets work.
                <br><br>
                Next, in order to understand orbit, you must understand <i>gravity</i>. Basically, when you are near a
                massive object, it will cause you to accelerate towards it, effectively pulling you in. And also note that
                this is <i>acceleration</i>, not velocity, so over time, you will start travelling faster and faster.
                On the surface of Earth, Earth is causing you to accelerate towards it 9.81 m/s/s or 9.81 m/s^2
                (or 9.81 meters per second, every second). The only reason you're not falling towards Earth's core
                is because the surface is exerting a force on you, holding you up. So, all objects close enough to Earth 
                will start accelerating towards Earth's surface.
                <br><br>
                Now, with all of this, how do satellites stay in space right over Earth? How is this possible (of course,
                you know this is possible because people have done it before). Well, there's this thing called 
                <i>orbital velocity</i>. Remember the rockets? Well, since Earth's gravity is exerting a force on you
                downwards, you can use a rocket to propel you upwards, and cancel out Earth's gravity (that's literally
                how airplanes, rockets, and all aircraft work). Now, if you travel fast enough (and we mean FAST),
                you can go so fast that Earth's gravity won't be enough to pull you back down. Basically, you're zipping 
                around the Earth, and at the same time, Earth is pulling you down, but by then, you've travelled so fast 
                that you're pretty much travelling sideways. 
                <br><br>
                And that's what orbit really is. Travelling so fast that you're falling sideways. And in order to be in 
                orbit, you have to travel at the orbital veloctiy. Go faster than that, and you fly away from Earth. 
                Go slower than that, and you fall back to Earth. And do note that the higher you are, the lower this
                orbital velocity is. So satellites that are orbiting higher up get to go slower than satellites down in 
                Low Earth Orbit (LEO). And that's what this calculator does. We let you tell us how high you want to go,
                and we'll tell you how fast you need to orbit at the height. We'll also tell you the orbit time (
                how long it takes to go around the Earth once at that height), as well as the Escape Velocity, which 
                is how fast you need to go to get out of Earth's gravitational pull.
                <br><br>
                The problem is, this calculator was also built with advanced researchers in mind, and because of that,
                instead of a simple form-filler, we had to make this into an API (application programming interface) 
                to make it easier to access with computer programs. In other words, you need to know how to code. 
                But if you don't, that's ok, because we'll teach you how to use this with a simple program. We'll be 
                using a simple programming language called <a href="https://www.python.org/">Python</a>. So go ahead 
                and go to python.org and install Python. Maybe take some online tutorials on how to use Python, too.
                Next, watch some YouTube videos on how to use PIP, because you need that for installing some packages
                that we need for this API.
                <br><br>
                Once you've figured that out on your computer, go ahead and run this line in your command terminal: <br><br>
                <code>
                pip install requests-html
                </code>
                <br><br>
                Next, open up a blank Python file, and put this code in:
                <br><br>
                <code>
                from requests_html import HTMLSession
                import requests
                <br><br>
                session = HTMLSession()<br>
                r = session.get(f"http://thisisrocketscience.live/api/{float(input('Enter Orbit Height (km): '))}")<br>
                orbitSpeed = r.html.find("#orbitSpeed", first=True)<br>
                orbitTime = r.html.find("#orbitTime", first=True)<br>
                escapeVelocity = r.html.find("#escapeVelocity", first=True)<br>
                print("Orbit Speed (m/s): ", orbitSpeed.text, "\nOrbit Time (seconds): ", orbitTime.text, "\nEscape Velocity (m/s): ", escapeVelocity.text)<br>
                input()
                </code><br><br>
                Don't worry if you don't understand that code, but for now, focus on running it. Once you run it, you 
                should see something that says:
                <code><br>
                Enter Orbit Height (km):
                </code><br>
                Type in a number of your choice, that will be how high you choose your rocket to go. For our purposes, 
                we will type in 2000 (for Low Earth Orbit), and hit the Enter/Return key. You should see something like
                the following pop up:
                <br>
                <code>
                Orbit Speed (m/s):  6897.6074<br>
                Orbit Time (seconds):  7632<br>
                Escape Velocity (m/s):  9754.6899<br>
                </code>
                If you see that, it worked! Your Python program was able to connect to our website's API, send a request
                to it, and get something back in return! With some more practice, you can write programs that can send
                more complex requests in rapid succession, gaining valuable data with which I'm not sure what you're going 
                to do. <br> *Note: This program was meant to help aspiring CubeSat developers brainstorm for project ideas.
                <br><br>

                Now here's a tidbit on how our program worked. There's a formula for calculating orbit speed based off height, 
                and that is:
                <br><br>
                <h1>sqrt(GM/R)</h1>
                <br><br>
                Where GM is a constant 398,600 and R is the total orbit radius, which is your orbit height + the radius
                of the Earth, and sqrt() is the square root function. The formula for the orbit time is:
                <br><br>
                <h1>(2 pi R)/V</h1>
                <br><br>
                Where R is your total orbit radius, pi is 3.14159... (obviously), and V is your orbit speed (or orbit velocity).
                <br>Finally, the formula for the escape velocity is:
                <br><br>
                <h1>sqrt(2GM/R)</h1>
                <br><br>
                Where sqrt() is your square root function, and all other variables have been defined above. To developers who
                want to look in depth into how our website works, and the specifics of our website (we use Node.js), check out our source code
                <a href="https://github.com/CheetSheatOverlode/rocketrange/">here</a>. To everyone else who has made the effort
                to read down this far, thank you, and we wish you success in your future science and technology learning.
                Thank you.
                <br><br>
                - Your Development Team (Eric Zou, Daniel Yi, Kevin Luo, and Jessie Zou)
            </body>
        `;
        res.end(content);
    }
}).listen(80);
