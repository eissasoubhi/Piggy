import angular from 'angular';
import uiRouter from 'angular-ui-router';
import moneyTrackerGroupsListComponent from './moneyTrackerGroupsList.component';

let moneyTrackerGroupsListModule = angular.module('moneyTrackerGroupsList', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('moneyTrackerGroupsList', {
      url: '/money-tracker-groups-list',
      template: '<money-tracker-groups-list></money-tracker-groups-list>'
    });
})
.component('moneyTrackerGroupsList', moneyTrackerGroupsListComponent);

export default moneyTrackerGroupsListModule;
