import angular from 'angular';
import breadcrumbsComponent from './breadcrumbs.component';

let breadcrumbsModule = angular.module('breadcrumbs', [])

.directive('breadcrumbs', breadcrumbsComponent);

export default breadcrumbsModule;
