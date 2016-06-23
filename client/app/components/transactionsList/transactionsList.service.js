class TransactionsListService {

  constructor($http, config) {
    "ngInject";
    this.http = $http;
    this.config = config;
  }

  transactions() {
    return this.http.get(this.config.serverHost + this.config.serverFolder + 'transactionsList.js');
  }
}
export default TransactionsListService;