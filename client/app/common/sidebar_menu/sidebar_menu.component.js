import template from './sidebar_menu.html';
import controller from './sidebar_menu.controller';
import './sidebar_menu.styl';

let sidebarMenuComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default sidebarMenuComponent;
