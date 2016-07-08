import angular from 'angular';
import select2optionComponent from './select2option.component';

let select2optionModule = angular.module('select2option', [])

.directive('select2option', select2optionComponent);

export default select2optionModule;
