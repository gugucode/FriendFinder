var path = require("path");

module.exports = function(app){
    app.get("/api/friends",function(req,res){
        // res.sendFile(path.join(__dirname,"survey.html"));
    })

    app.post("/api/friends",function(req,res){
        // res.sendFile(path.join(__dirname,"home.html"));
    })
}


