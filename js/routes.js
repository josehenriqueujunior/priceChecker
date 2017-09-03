angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.codigoDeBarras', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/codigoDeBarras.html',
        controller: 'codigoDeBarrasCtrl'
      }
    }
  })

  .state('tabsController.listaDeCompras', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/listaDeCompras.html',
        controller: 'listaDeComprasCtrl'
      }
    }
  })

  .state('tabsController.info', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/info.html',
        controller: 'infoCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('page', {
    url: '/page5',
    templateUrl: 'templates/Add.html',
    controller: 'addCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')


});