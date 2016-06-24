class NewTransactionService {

    constructor($http, config) {
        "ngInject";
        this.http = $http;
        this.config = config;
    }

    moneyTrackers() {
        return this.http.get(this.config.serverHost + this.config.serverFolder + 'money-trackers.js');
    }

    moneyBoxes() {
        return this.http.get(this.config.serverHost + this.config.serverFolder + 'money-boxes.js');
    }

    info() {
        return this.http.get(this.config.serverHost + this.config.serverFolder + 'newTransaction.js');
    }
}
export default NewTransactionService;