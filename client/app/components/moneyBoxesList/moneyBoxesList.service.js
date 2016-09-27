class MoneyBoxesListService {

  constructor($http, config) {
    "ngInject";
    this.http = $http;
    this.config = config;
  }

  moneyBoxes() {
    return this.http.get(this.config.serverHost + this.config.serverFolder + 'moneyBoxesList.js');
  }
}
export default MoneyBoxesListService;