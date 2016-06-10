import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sidebarMenuComponent from './sidebar_menu.component';

let sidebarMenuModule = angular.module('sidebar_menu', [
  uiRouter
])

.component('sidebarMenu', sidebarMenuComponent);

export default sidebarMenuModule;
