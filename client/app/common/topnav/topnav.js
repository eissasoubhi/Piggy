import angular from 'angular';
import uiRouter from 'angular-ui-router';
import topnavComponent from './topnav.component';

let topnavModule = angular.module('topnav', [
  uiRouter
])

.component('topNav', topnavComponent);

export default topnavModule;
