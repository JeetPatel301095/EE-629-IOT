var PythonShell = require('python-shell');
var a =false;
var b;


const constructormethod = app =>{
    app.get("/",async (req, res)=>{
        console.log("Hello");
        res.render("temp/basic")
    });

    app.post("/on",async(req,res)=>{
        console.log("On");
        if(a)
            res.send("LED is already On");
        else
        {
            a=true;
            b = Date.now();
            var options = {
                mode: 'text',
                encoding:'utf8',
                pythonOptions: ['-u'],
                scriptPath: "//home//pi//EE-629-IOT//IOTProject629//routes",
            }
            
            var test = new PythonShell.PythonShell("on.py",options);
            test.on("message",function(message){
                res.send(message);
            })
        }
        
    });

    
    app.post("/off",async(req,res)=>{
        console.log("Off");
        if(a)
        {
            a= false;
            var c= Date.now()
            var d = c-b;
            d/=1000;
            console.log(d);
            var options = {
                mode: 'text',
                encoding:'utf8',
                pythonOptions: ['-u'],
                scriptPath: "//home//pi//EE-629-IOT//IOTProject629//routes",
            }
            
            var test = new PythonShell.PythonShell("off.py",options);
            test.on("message",function(message){
                res.send(message+"  "+d);
            })

		
            var options = {
                mode: 'text',
                encoding:'utf8',
                pythonOptions: ['-u'],
                scriptPath: "//home//pi//EE-629-IOT//IOTProject629//routes",
                args:[d]
            }
            
            var test = new PythonShell.PythonShell("rpi_spreadsheet.py",options);
            test.on("message",function(message){
               console.log(message);
            })
        }
        else
        {
            res.send("LED is already Off");
        }
        
    });
};

module.exports = constructormethod;
