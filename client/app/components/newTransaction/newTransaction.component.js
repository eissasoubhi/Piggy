import template from './newTransaction.html';
import controller from './newTransaction.controller';
import './newTransaction.styl';

let newTransactionComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default newTransactionComponent;
