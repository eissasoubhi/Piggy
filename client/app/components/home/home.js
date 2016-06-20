import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import homeService from './home.service';
import './home.script.js';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    });
})

.component('home', homeComponent)
.service('HomeService', homeService);

export default homeModule;
