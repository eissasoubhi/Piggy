import angular from 'angular';
import testdirComponent from './testdir.component';

let testdirModule = angular.module('testdir', [])

.directive('testdir', testdirComponent);

export default testdirModule;
