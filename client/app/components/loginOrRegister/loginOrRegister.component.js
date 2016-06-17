import template from './loginOrRegister.html';
import controller from './loginOrRegister.controller';
import './loginOrRegister.styl';

let loginOrRegisterComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default loginOrRegisterComponent;
