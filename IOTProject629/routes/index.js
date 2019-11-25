const constructormethod = app =>{
    app.get("/",async (req, res)=>{
        console.log("Hello");
        var spawn = require("child_process").spawn;
        var process = spawn('python',["./hello.py"]);
        process.stdout.on('data', function(data) { 
            res.send(data.toString());
        } ) 
    });

};

module.exports = constructormethod;