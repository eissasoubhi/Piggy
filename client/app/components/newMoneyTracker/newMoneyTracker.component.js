import template from './newMoneyTracker.html';
import controller from './newMoneyTracker.controller';
import './newMoneyTracker.styl';

let newMoneyTrackerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default newMoneyTrackerComponent;
