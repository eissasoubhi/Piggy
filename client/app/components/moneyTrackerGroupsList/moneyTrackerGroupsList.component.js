import template from './moneyTrackerGroupsList.html';
import controller from './moneyTrackerGroupsList.controller';
import './moneyTrackerGroupsList.styl';

let moneyTrackerGroupsListComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default moneyTrackerGroupsListComponent;
