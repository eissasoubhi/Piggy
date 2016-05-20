import angular from 'angular';
import Topnav from './topnav/topnav';
import SidebarMenu from './sidebar_menu/sidebar_menu';
import './common_javascript/common_javascript';
import User from './user/user';
import LineChart from './lineChart/lineChart';

let commonModule = angular.module('app.common', [
  Topnav.name,
  SidebarMenu.name,
  User.name,
  LineChart.name
]);

export default commonModule;
