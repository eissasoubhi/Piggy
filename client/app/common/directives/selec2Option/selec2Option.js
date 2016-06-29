import angular from 'angular';
import selec2OptionComponent from './selec2Option.component';

let selec2OptionModule = angular.module('selec2Option', [])

.directive('selec2Option', selec2OptionComponent);

export default selec2OptionModule;
