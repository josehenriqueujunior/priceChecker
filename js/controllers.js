angular.module('app.controllers', [])
  
.controller('codigoDeBarrasCtrl', ['$scope', '$stateParams','$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $location) {

$scope.confirmar = function (codigodebarras){
    var search = null;
   if(search == null){
      if(confirm("Deseja adicionar este Produto?")==true){
          $location.url('/page5')
      }
       else{ $location.url('/index.html')}
   }
    else{
        //procura o objeto no banco
    }
}

}])
   
.controller('listaDeComprasCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
//lista os itens adicionados na lista de compras

}])
   
.controller('infoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('addCtrl', ['$scope', '$stateParams', '$location',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$location) {
    //add produtos no banco de dados após o clique no botão adicionar produtos
$scope.voltar = function(){
    $location.url('/index.html')
}

}])
 