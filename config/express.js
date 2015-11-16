var express = require('express'); // importa o módulo do express
var bodyParser = require('body-parser'); // importa o body-parser que permite parsear as requisições

/* torna o que estiver dentro da funcção export visível para os arquivos que derem require */
module.exports = function() { 
  var app = express();
  
  app.set('port', 3000); // seta o valor da variável de ambiente porta para 3000
  
  /* middleware */
  app.use(express.static('./public')); // utiliza o express.static, que define pastas estáticas
  
  app.set('view engine', 'ejs'); // utiliza o ejs como template engine ao mudar a variável de ambiente view engine
  app.set('views','./app/views'); // utiliza o a pasta './app/views' como diretório padrão para as views ao mudar variável de ambiente 'views'
  
  app.use(bodyParser.urlencoded({extended: true})); // permite requisições com o corpo x-ww-form-urlencoded, permitindo acessar os dados da requisição atravésde req.body
  app.use(bodyParser.json()); // permite realizar parse de JSON
  app.use(require('method-override')()); // Possibilita o uso de verbos HTTP como o PUT e o DELETE quando o client não der suporte a eles
  
  return app; // retorna a função express()
};
