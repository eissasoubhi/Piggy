class TopnavService {

  constructor($http, config) {
    "ngInject";
    this.http = $http;
    this.config = config;
  }

  info() {
    return this.http.get(this.config.serverHost + this.config.serverFolder + 'topnav.js');
  }
}
export default TopnavService;