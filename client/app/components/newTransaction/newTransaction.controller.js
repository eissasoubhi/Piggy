class NewTransactionController {
    constructor(NewTransactionService) {
        'ngInject';
        this.service = NewTransactionService;
        this.completed_loading = 0;
        this.loading = true;
        this.all_loaded = 3;
        this.money_boxes = [];
        this.money_trackers = [];
        this.schedule = [];
        this.every = 1;
        self = this;
        this.loadInfo();
        this.setScheduleArray();

    }

    loadInfo(){
        var self = this;
        this.service.moneyBoxes().success(function(money_boxes){
                self.money_boxes = money_boxes;
                self.loadingCompleted();
            })

        this.service.moneyTrackers().success(function(money_trackers){
                self.money_trackers = money_trackers;
                self.loadingCompleted();
            })

        this.service.info().success(function(data){
                self.made_transactions = data.made_transactions;
                self.loadingCompleted();
            })

    }

    loadingCompleted()
    {
        this.completed_loading++;
        if(this.completed_loading == this.all_loaded)
        {
            this.loading = false;
        }
    }

    setScheduleArray()
    {
        for (var i = 1; i <= 30; i++) {
            this.schedule.push(i)
        };
    }
}

export default NewTransactionController;
