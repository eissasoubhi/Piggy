import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newTransactionComponent from './newTransaction.component';

let newTransactionModule = angular.module('newTransaction', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('newTransaction', {
      url: '/new-transaction',
      template: '<new-transaction></new-transaction>'
    });
})

.component('newTransaction', newTransactionComponent);

export default newTransactionModule;
