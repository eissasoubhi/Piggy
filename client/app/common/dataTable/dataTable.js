import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dataTableComponent from './dataTable.component';
// log(dataTableComponent)
let dataTableModule = angular.module('dataTable', [
  uiRouter
])

.directive('dataTable', dataTableComponent);

export default dataTableModule;
