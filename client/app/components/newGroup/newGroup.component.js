import template from './newGroup.html';
import controller from './newGroup.controller';
import './newGroup.styl';

let newGroupComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default newGroupComponent;
