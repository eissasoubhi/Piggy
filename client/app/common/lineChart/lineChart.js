import angular from 'angular';
import uiRouter from 'angular-ui-router';
import lineChartComponent from './lineChart.component.js';
import controller from './lineChart.controller';

let lineChartModule = angular.module('lineChart', [
  uiRouter
])
.directive('lineChart', lineChartComponent);

export default lineChartModule;
