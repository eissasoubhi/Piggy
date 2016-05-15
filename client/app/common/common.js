import angular from 'angular';
import Topnav from './topnav/topnav';
import SidebarMenu from './sidebar_menu/sidebar_menu';
import CommonJavascript from './common_javascript/common_javascript';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Topnav.name,
  CommonJavascript.name,
  SidebarMenu.name,
  User.name
]);

export default commonModule;
