angular.module('app', ['ngRoute']) // startando a propriedade module do objeto angular e iniciando a app
.config(function($routeProvider) {
  
  $routeProvider.when('/', { 
    templateUrl: 'partials/login.html', 
    controller: 'LoginController' 
  });
  
  $routeProvider.otherwise({redirectTo: '/'});
    
});
angular.module('app').controller('LoginController', function($scope) {
  $scope.LOGIN = "login";
});
angular.module('app').service('TesteStore', function () {
  var teste  = 1;
  
  var result = 0;

  
  return {
    getTeste: function () {
      return teste;
    },
    setTeste: function(value) {
      teste = value;
    }
    
  };
});