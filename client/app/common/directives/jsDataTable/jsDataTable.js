import angular from 'angular';
import jsDataTableComponent from './jsDataTable.component';

let jsDataTableModule = angular.module('jsDataTable', [])

.directive('jsDataTable', jsDataTableComponent);

export default jsDataTableModule;
