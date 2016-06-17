import angular from 'angular';
import uiRouter from 'angular-ui-router';
import leftSideComponent from './leftSide.component';

let leftSideModule = angular.module('leftSide', [
  uiRouter
])

.component('leftSide', leftSideComponent);

export default leftSideModule;
