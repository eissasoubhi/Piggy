import angular from 'angular';
import uiRouter from 'angular-ui-router';
import collapseLinkComponent from './collapseLink.component';

let collapseLinkModule = angular.module('collapseLink', [
  uiRouter
])

.directive('collapseLink', collapseLinkComponent);

export default collapseLinkModule;
