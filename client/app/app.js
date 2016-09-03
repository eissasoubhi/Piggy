import 'expose?jQuery!jquery';
import 'expose?$!jquery';
import angular from 'angular';
import datatables from 'angular-datatables';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import 'normalize.css';

var app = angular.module('app', [
    uiRouter,
    Common.name,
    Components.name,
    'ui.bootstrap',
    'ngMaterial',
    datatables
  ])
  .config(($locationProvider, $urlRouterProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $urlRouterProvider.otherwise('/404');
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent)

  .constant('config', {
      serverHost: 'http://localhost:3000/',
      serverFolder: 'app/common/server/'
  });
