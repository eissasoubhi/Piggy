import template from './moneyBoxGroupsList.html';
import controller from './moneyBoxGroupsList.controller';
import './moneyBoxGroupsList.styl';

let moneyBoxGroupsListComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default moneyBoxGroupsListComponent;
