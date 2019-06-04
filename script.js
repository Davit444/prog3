var express =require("express");
var app =express();

app.get("/", function(req, res){
    res.redirect('http://google.com');
 });
 app.get("/name/:search", function(req, res){
    var name = req.params.name;
    rec.redirec("http;//google.com/search?q=search value"+name);
    
 });
 
 app.listen(3000, function(){
    console.log("Example is running on port 3000");
 });