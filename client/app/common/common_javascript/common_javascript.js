import angular from 'angular';
import uiRouter from 'angular-ui-router';
import commonJavascriptComponent from './common_javascript.component';

let commonJavascriptModule = angular.module('common_javascript', [
  uiRouter
])

.component('commonJavascript', commonJavascriptComponent);

export default commonJavascriptModule;
