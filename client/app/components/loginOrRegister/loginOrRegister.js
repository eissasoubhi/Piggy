import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginOrRegisterComponent from './loginOrRegister.component';

let loginOrRegisterModule = angular.module('loginOrRegister', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('loginOrRegister', {
      url: '/login',
      template: '<login-or-register></login-or-register>'
    });
})
.component('loginOrRegister', loginOrRegisterComponent);

export default loginOrRegisterModule;
