class NewTransactionService {

    constructor($http, config) {
        "ngInject";
        this.http = $http;
        this.config = config;
    }

    moneyTrackers() {
        return this.http.get(this.config.serverHost + this.config.serverFolder + 'moneyTrackersListWithGroups.js');
    }

    moneyBoxes() {
        return this.http.get(this.config.serverHost + this.config.serverFolder + 'moneyBoxesListWithGroups.js');
    }

    info() {
        return this.http.get(this.config.serverHost + this.config.serverFolder + 'newTransaction.js');
    }
}
export default NewTransactionService;