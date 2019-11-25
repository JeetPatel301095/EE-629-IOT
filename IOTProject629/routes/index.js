var PythonShell = require('python-shell');

const constructormethod = app =>{
    app.get("/",async (req, res)=>{
        console.log("Hello");
        var options = {
            mode: 'text',
            pythonOptions: ['-u'], // get print results in real-time
            scriptPath: 'C:\\Users\\Jeet\\Jeet\\EE-629\\EE-629-IOT\\IOTProject629\\routes\\',
            args: [5,4]
          }
        PythonShell.PythonShell.run('hello.py',options,function(err,result){
            if(err) throw err;
            console.log(result);
            console.log('finished');
            res.render("temp/basic");
        });        
    });

};

module.exports = constructormethod;