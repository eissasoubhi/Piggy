import angular from 'angular';
import optionsModelComponent from './optionsModel.component';

let optionsModelModule = angular.module('optionsModel', [])

.directive('optionsModel', optionsModelComponent);

export default optionsModelModule;
