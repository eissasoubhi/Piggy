import template from './topnav.html';
import controller from './topnav.controller';
import './topnav.styl';

let topnavComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default topnavComponent;
