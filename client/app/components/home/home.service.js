class HomeService {

  constructor($http, config) {
    "ngInject";
    this.http = $http;
    this.config = config;
  }

  info() {
    return this.http.get(this.config.serverHost + this.config.serverFolder + 'home.js');
  }
}
export default HomeService;