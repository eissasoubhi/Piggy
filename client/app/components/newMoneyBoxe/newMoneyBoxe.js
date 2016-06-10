import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newMoneyBoxeComponent from './newMoneyBoxe.component';

let newMoneyBoxeModule = angular.module('newMoneyBoxe', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('newMoneyBoxe', {
      url: '/new-money-boxe',
      template: '<new-money-boxe></new-money-boxe>'
    });
})

.component('newMoneyBoxe', newMoneyBoxeComponent);

export default newMoneyBoxeModule;
