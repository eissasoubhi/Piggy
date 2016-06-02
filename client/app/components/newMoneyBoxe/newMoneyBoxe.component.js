import template from './newMoneyBoxe.html';
import controller from './newMoneyBoxe.controller';
import './newMoneyBoxe.styl';

let newMoneyBoxeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default newMoneyBoxeComponent;
