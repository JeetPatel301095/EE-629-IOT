var PythonShell = require('python-shell');

const constructormethod = app =>{
    app.get("/",async (req, res)=>{
        console.log("Hello");
        PythonShell.PythonShell.run('C:\\Users\\Jeet\\Jeet\\EE-629\\EE-629-IOT\\IOTProject629\\routes\\hello.py',null,function(err){
            if(err) throw err;
            console.log('finished');
            res.render("temp/basic");
        });        
    });

};

module.exports = constructormethod;