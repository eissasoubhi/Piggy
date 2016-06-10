import angular from 'angular';
import uiRouter from 'angular-ui-router';
import moneyBoxGroupsListComponent from './moneyBoxGroupsList.component';

let moneyBoxGroupsListModule = angular.module('moneyBoxGroupsList', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('moneyBoxGroupsList', {
      url: '/money-box-groups-list',
      template: '<money-box-groups-list></money-box-groups-list>'
    });
})
.component('moneyBoxGroupsList', moneyBoxGroupsListComponent);

export default moneyBoxGroupsListModule;
