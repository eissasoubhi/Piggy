import template from './moneyTrackersList.html';
import controller from './moneyTrackersList.controller';
import './moneyTrackersList.styl';

let moneyTrackersListComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default moneyTrackersListComponent;
