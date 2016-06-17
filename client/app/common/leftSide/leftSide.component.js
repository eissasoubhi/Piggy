import template from './leftSide.html';
import controller from './leftSide.controller';
import './leftSide.styl';

let leftSideComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default leftSideComponent;
