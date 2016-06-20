let HomeService = function () {
  const data = {
    page: 'home',
    url: '/'
  };

  let loadData = () => {
    return data;
  };

    return {
        loadData
    };
};

export default HomeService;
