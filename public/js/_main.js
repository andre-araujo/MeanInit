angular.module('app', ['ngRoute']) // startando a propriedade module do objeto angular e iniciando a app
.config(function($routeProvider) {
  
  $routeProvider.when('/', { 
    templateUrl: 'partials/login.html', 
    controller: 'LoginController' 
  });
  
  $routeProvider.otherwise({redirectTo: '/'});
    
});