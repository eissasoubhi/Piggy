import template from './transactionsList.html';
import controller from './transactionsList.controller';
import './transactionsList.styl';

let transactionsListComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default transactionsListComponent;
