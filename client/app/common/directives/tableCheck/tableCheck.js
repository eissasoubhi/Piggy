import angular from 'angular';
import tableCheckComponent from './tableCheck.component';

let tableCheckModule = angular.module('tableCheck', [])

.directive('tableCheck', tableCheckComponent);

export default tableCheckModule;
