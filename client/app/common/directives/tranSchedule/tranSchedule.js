import angular from 'angular';
import tranScheduleComponent from './tranSchedule.component';

let tranScheduleModule = angular.module('tranSchedule', [])

.directive('tranSchedule', tranScheduleComponent);

export default tranScheduleModule;
