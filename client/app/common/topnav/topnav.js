import angular from 'angular';
import uiRouter from 'angular-ui-router';
import topnavComponent from './topnav.component';
import topnavService from './topnav.service.js';

let topnavModule = angular.module('topnav', [
  uiRouter
])

.component('topNav', topnavComponent)
.service('TopnavService', topnavService);

export default topnavModule;
