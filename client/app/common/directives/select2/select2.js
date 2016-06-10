import angular from 'angular';
import select2Component from './select2.component';

let select2Module = angular.module('select2', [])

.directive('select2', select2Component);

export default select2Module;
