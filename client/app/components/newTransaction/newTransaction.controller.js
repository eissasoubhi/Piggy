class NewTransactionController {
    constructor(NewTransactionService) {
        'ngInject';
        this.service = NewTransactionService;
        this.loading = true;
        this.money_boxes = [];
        this.money_trackers = [];
        this.made_transactions = 0;

        this.loadInfo();
    }

    loadInfo(){
        var self = this, mb, mt, info;
        mb = this.service.moneyBoxes().success(function(money_boxes){
                self.money_boxes = money_boxes;
            })

        mt = this.service.moneyTrackers().success(function(money_trackers){
                self.money_trackers = money_trackers;
            })

        info = this.service.info().success(function(data){
                self.made_transactions = data.made_transactions;
            })

        Promise.all([mb, mt, info]).then(values => {
            self.loading = false;
        })
    }
}

export default NewTransactionController;
