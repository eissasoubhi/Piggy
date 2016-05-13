import angular from 'angular';
import Topnav from './topnav/topnav';
import Hero from './hero/hero';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Topnav.name,
  Hero.name,
  User.name
]);

export default commonModule;
