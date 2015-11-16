var http = require("http");
var app = require("./config/express")();


http.createServer(app)
  .listen(
    app.get('port'), 
    function(){
      console.log(
        'Node on ! ' + app.get('port')
      ); 
});

