import angular from 'angular';
import uiRouter from 'angular-ui-router';
import transactionsListComponent from './transactionsList.component';

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

.component('transactionsList', transactionsListComponent);

export default transactionsListModule;
