import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newTransactionComponent from './newTransaction.component';
import newTransactionService from './newTransaction.service';

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

.component('newTransaction', newTransactionComponent)
.service('NewTransactionService', newTransactionService);

export default newTransactionModule;
