import angular from 'angular';
import Topnav from './topnav/topnav';
import SidebarMenu from './sidebar_menu/sidebar_menu';
import './common_javascript/common_javascript';
import User from './user/user';
import Chart from './chart/chart';
import CollapseLink from './collapseLink/collapseLink';
import DataTable from './dataTable/dataTable';

let commonModule = angular.module('app.common', [
  Topnav.name,
  SidebarMenu.name,
  User.name,
  Chart.name,
  CollapseLink.name,
  DataTable.name,
]);

export default commonModule;
