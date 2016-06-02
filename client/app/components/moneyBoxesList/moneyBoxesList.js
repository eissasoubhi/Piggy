import angular from 'angular';
import uiRouter from 'angular-ui-router';
import moneyBoxesListComponent from './moneyBoxesList.component';

let moneyBoxesListModule = angular.module('moneyBoxesList', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('moneyBoxesList', {
      url: '/money-boxes-list',
      template: '<money-boxes-list></money-boxes-list>'
    });
})

.component('moneyBoxesList', moneyBoxesListComponent);

export default moneyBoxesListModule;
