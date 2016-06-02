import template from './moneyBoxesList.html';
import controller from './moneyBoxesList.controller';
import './moneyBoxesList.styl';

let moneyBoxesListComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default moneyBoxesListComponent;
