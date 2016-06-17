import angular from 'angular';
import uiRouter from 'angular-ui-router';
import page404Component from './page404.component';

let page404Module = angular.module('page404', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('page404', {
      url: '/404',
      template: '<page404></page404>'
    });
})
.component('page404', page404Component);

export default page404Module;
