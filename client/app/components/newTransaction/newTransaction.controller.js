class NewTransactionController {
    constructor(NewTransactionService) {
        'ngInject';
        this.service = NewTransactionService;
        this.completed_loading = 0;
        this.loading = true;
        this.all_loaded = 3;
        this.money_boxes = [];
        this.money_trackers = [];
        this.schedule_every_array = [];
        this.schedule_every = 1;
        self = this;
        this.loadInfo();
        this.setScheduleArray();
        this.schedule_loop_selected;
        this.schedule_loop = [{'text': 'month(s)', 'value': 'month', 'enabled': true},
                              {'text': 'week(s)', 'value': 'week', 'enabled': true},
                              {'text': 'day(s)', 'value': 'day', 'enabled': true}];

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
            this.schedule_every_array.push(i)
        };
    }

    validateScheduleLoop()
    {
        if(this.schedule_every > 12 )
        {
            for (var i = 0; i < this.schedule_loop.length; i++) {
                if(this.schedule_loop[i].value == 'month')
                {
                    this.schedule_loop[i].enabled = false;
                }
            };
        }
        else
        {

        }
    }
}

export default NewTransactionController;
