import angular from 'angular';
import uiRouter from 'angular-ui-router';
import chartComponent from './chart.component.js';
import controller from './chart.controller';

let chartModule = angular.module('chart', [
  uiRouter
])
.directive('chart', chartComponent);

export default chartModule;
