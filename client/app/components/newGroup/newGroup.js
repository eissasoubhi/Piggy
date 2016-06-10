import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newGroupComponent from './newGroup.component';

let newGroupModule = angular.module('newGroup', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('newGroup', {
      url: '/new-group',
      template: '<new-group></new-group>'
    });
})
.component('newGroup', newGroupComponent);

export default newGroupModule;
