import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pageFooterComponent from './pageFooter.component';

let pageFooterModule = angular.module('pageFooter', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('pageFooter', {
      url: '/page-footer',
      template: '<page-footer></page-footer>'
    });
})
.component('pageFooter', pageFooterComponent);

export default pageFooterModule;
