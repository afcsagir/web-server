var express=require('express');
var app=express();
var PORT=3000;

var middleware ={
	requireAuthentication:function(req,res,next){
    console.log('private route hit');
    next();
	},
 
logger: function(req,res,next){
	console.log('Request:'+new Date().toString() +'  '+req.method+''+req.originalUrl);
	next();
}
};
app.use(middleware.logger);
//app.get('/',function (req,res) {
	// body...
	//res.send('Hello Express');
//});
//about
app.get('/about',middleware.requireAuthentication, function(req,res){
      res.send('Hi There');

});

app.get('/home',function(req,res){
      res.send('Hi There home');

});
app.use(express.static(__dirname+'/public'));
//console.log(__dirname);
app.listen(PORT,function(){
	console.log('Express server Started on port'+PORT+'!');
});