import angular from 'angular';
import uiRouter from 'angular-ui-router';
import moneyTrackersListComponent from './moneyTrackersList.component';

let moneyTrackersListModule = angular.module('moneyTrackersList', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('moneyTrackersList', {
      url: '/money-trackers-list',
      template: '<money-trackers-list></money-trackers-list>'
    });
})
.component('moneyTrackersList', moneyTrackersListComponent);

export default moneyTrackersListModule;
