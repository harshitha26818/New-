var express=require('express');
var app=express();
var port=process.env.PORT ||3000;

app.get('/',function(req,res){
   // res.send("hello thaliva");
   res.sendFile(__dirname+'/frontend/html/index.html');
});

app.listen(port,function(){
   console.log("site running on http://localhost:"+port);
});
