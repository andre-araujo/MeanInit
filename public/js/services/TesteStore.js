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