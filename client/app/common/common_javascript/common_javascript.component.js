import template from './common_javascript.html';
import controller from './common_javascript.controller';
import './common_javascript.styl';

let commonJavascriptComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default commonJavascriptComponent;
