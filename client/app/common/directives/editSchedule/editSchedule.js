import angular from 'angular';
import editScheduleComponent from './editSchedule.component';

let editScheduleModule = angular.module('editSchedule', [])

.directive('editSchedule', editScheduleComponent);

export default editScheduleModule;
