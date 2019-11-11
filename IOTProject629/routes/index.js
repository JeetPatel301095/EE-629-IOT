const constructormethod = app =>{
    app.get("/",async (req, res)=>{
        console.log("Hello");
        res.render("temp/basic");
    });

};

module.exports = constructormethod;