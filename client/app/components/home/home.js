import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import bootstrap from 'bootstrap';
console.dir(bootstrap)
let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    });
})

.component('home', homeComponent);

export default homeModule;
