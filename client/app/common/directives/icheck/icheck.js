import angular from 'angular';
import icheckComponent from './icheck.component';

let icheckModule = angular.module('icheck', [])

.directive('icheck', icheckComponent);

export default icheckModule;
