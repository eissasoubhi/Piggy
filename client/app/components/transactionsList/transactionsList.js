import angular from 'angular';
import uiRouter from 'angular-ui-router';
import transactionsListComponent from './transactionsList.component';
import transactionsListService from './transactionsList.service';

let transactionsListModule = angular.module('transactionsList', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('transactionsList', {
      url: '/transactions-list',
      template: '<transactions-list></transactions-list>'
    });
})

.component('transactionsList', transactionsListComponent)
.service('TransactionsListService', transactionsListService);
export default transactionsListModule;
