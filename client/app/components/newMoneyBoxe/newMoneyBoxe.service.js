class NewMoneyBoxeService {

    constructor($http, config) {
        "ngInject";
        this.http = $http;
        this.config = config;
    }

    moneyBoxeGroups() {
        return this.http.get(this.config.serverHost + this.config.serverFolder + 'moneyBoxeGroups.js');
    }
}
export default NewMoneyBoxeService;