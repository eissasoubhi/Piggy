class NewTransactionController {
    constructor(NewTransactionService, GlobalOptionsService)
    {
        'ngInject';
        this.service = NewTransactionService;
        this.completed_loading = 0;
        this.loading = true;
        this.disable_days = false;
        this.all_loaded = 3;
        this.money_boxes = [];
        this.money_trackers = [];
        this.schedule_every_array = [];
        this.days_numbers = [];
        this.times = [];
        this.schedule_every = 1;

        this.setScheduleArray();
        this.setDaysNumbersArray();
        this.setTimesArray();
        this.schedule_time = this.times[0].value;
        this.schedule_loop = [{'text': 'month(s)', 'value': 'month', 'enabled': true},
                              {'text': 'week(s)', 'value': 'week', 'enabled': true},
                              {'text': 'day(s)', 'value': 'day', 'enabled': true}];
        this.schedule_loop_selected = this.schedule_loop[0].value;
        this.days = this.days_numbers;
        this.days_names = GlobalOptionsService.days_of_week;
        this.options = GlobalOptionsService.select2_options
        this.loadInfo()
    }

    loadInfo()
    {
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
    //
    setScheduleArray()
    {
        this.schedule_every_array = [];
        for (var i = 1; i <= 30; i++) {
            this.schedule_every_array.push(i)
        };
    }
    //
    setTimesArray()
    {
        var time_format;
        for (var i = 0; i <= 23; i++) {
            time_format = i > 9 ? "" + i: "0" + i;
            this.times.push({
                'value': time_format,
                'text': time_format + ':00'
            })
        };
    }
    //
    setDaysNumbersArray()
    {
        var text, last_digit;
        for (var i = 1; i <= 31; i++) {
            text = 'the ';
            last_digit = i.toString().substr(i.toString().length - 1);
            if(last_digit == 1 && i != 11)
            {
                text += i+'st'
            }
            else if(last_digit == 2 && i != 12)
            {
                text += i+'nd'
            }
            else if(last_digit == 3 && i != 13)
            {
                text += i+'rd'
            }
            else
            {
                text += i+'th'
            }

            this.days_numbers.push({
                'value': i,
                'text': text
            })
        };
    }
    //
    validateScheduleLoop(select, scope)
    {
        var self = scope ? scope.vm : this;
        var selected = scope ? scope.$eval(select.attr('select2')) : this.schedule_every;
        // log('selected', selected)
        // log('self', scope.vm)
        if(selected > 12 )
        {
            self.enableScheduleLoop('month', false);
        }
        else
        {
            self.enableScheduleLoop('month', true);
        }
    }
    //
    enableScheduleLoop(loop_name, enable = true)
    {
        for (var i = 0; i < this.schedule_loop.length; i++) {
            if(this.schedule_loop[i].value == loop_name)
            {
                this.schedule_loop[i].enabled = enable;
            }
        };
    }
    //
    daysFormat(select, scope)
    {
        var self = scope ? scope.vm : this;
        var selected = scope ? scope.$eval(select.attr('select2')) : this.schedule_loop_selected;

        self.disable_days = false;

        if(selected == 'month')
        {
            self.days = self.days_numbers;
        }
        else
        {
            if(selected == 'day')
            {
                self.disable_days = true
            }

            self.days = self.days_names;
        }
    }
}

export default NewTransactionController;
