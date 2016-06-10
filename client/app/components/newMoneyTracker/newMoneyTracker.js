import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newMoneyTrackerComponent from './newMoneyTracker.component';

let newMoneyTrackerModule = angular.module('newMoneyTracker', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('newMoneyTracker', {
      url: '/new-money-tracker',
      template: '<new-money-tracker></new-money-tracker>'
    });
})
.component('newMoneyTracker', newMoneyTrackerComponent);

export default newMoneyTrackerModule;
