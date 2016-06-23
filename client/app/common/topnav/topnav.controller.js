class TopnavController {
    constructor(TopnavService) {
        'ngInject';
        this.service = TopnavService;
        this.loading = true;

        this.info();
    }

    info()
    {
        var self = this;
        this.service.info().success(function(data){
            self.search_info = self.parseData(data);
            log(self.search_info)
            self.loading = false;
        })
    }

    parseData(data)
    {
        return $.map(data, function(value, key) {
                    return {
                        value: value,
                        data: key
                    };
                });
    }
}

export default TopnavController;
