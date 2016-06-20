let HomeService = function () {
  const server_folder = '../../common/server/'

  let info = ($http) => {
    //localhost:3000
    return $http.get(server_folder + 'home.js');
  };

    return {
        info
    };
};

export default HomeService;
