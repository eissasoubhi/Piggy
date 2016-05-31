import angular from 'angular';
import Topnav from './topnav/topnav';
import SidebarMenu from './sidebar_menu/sidebar_menu';
import './common_javascript/common_javascript';
import User from './user/user';
import Chart from './directives/chart/chart';
import CollapseLink from './directives/collapseLink/collapseLink';
import JsDataTable from './directives/jsDataTable/jsDataTable';
import Icheck from './directives/icheck/icheck';
import select2 from './directives/select2/select2';

let commonModule = angular.module('app.common', [
  Topnav.name,
  SidebarMenu.name,
  User.name,
  Chart.name,
  CollapseLink.name,
  JsDataTable.name,
  Icheck.name,
  select2.name,
]);

export default commonModule;