import template from './newTransaction.html';
import controller from './newTransaction.controller';
import './newTransaction.styl';
// import 'jquery-datetimepicker/build/jquery.datetimepicker.min.css';

let newTransactionComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default newTransactionComponent;
