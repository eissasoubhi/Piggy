class NewTransactionController {
    constructor(NewTransactionService) {
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
        this.loadInfo();
        this.setScheduleArray();
        this.setDaysNumbersArray();
        this.setTimesArray();
        this.schedule_time = this.times[0].value;
        this.schedule_loop = [{'text': 'month(s)', 'value': 'month', 'enabled': true},
                              {'text': 'week(s)', 'value': 'week', 'enabled': true},
                              {'text': 'day(s)', 'value': 'day', 'enabled': true}];
        this.schedule_loop_selected = this.schedule_loop[0].value;
        this.days_names = [{'text': 'Sunday', 'value': 'sunday'},
                            {'text': 'Monday', 'value': 'monday'},
                            {'text': 'Tuesday', 'value': 'tuesday'},
                            {'text': 'Wednesday', 'value': 'wednesday'},
                            {'text': 'Thursday', 'value': 'thursday'},
                            {'text': 'Friday', 'value': 'friday'},
                            {'text': 'Saturday', 'value': 'saturday'}];

        this.days = this.days_numbers;
        this.options = {
                    templateResult: function (option)
                    {
                        function hightlight(path) {
                            var paths = path.split('>');
                            paths[paths.length - 1] = '<strong>' + paths[paths.length - 1] + '</strong>';
                            return paths.join('>');
                        }
                        if($(option.element).data('type'))
                        {
                            var type = $(option.element).data('type');
                            return $('<div>' + hightlight(option.text) + '<span class="m_type">' + type + '</span></div>');
                        }

                        return $('<div>' + hightlight(option.text) + '</div>');
                    }
                };
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

    setDaysNumbersArray()
    {
        for (var i = 1; i <= 31; i++) {
            this.days_numbers.push({
                'value': i,
                'text': i+' th'
            })
        };
    }

    validateScheduleLoop()
    {
        if(this.schedule_every > 12 )
        {
            this.enableScheduleLoop('month', false);
        }
        else
        {
            this.enableScheduleLoop('month', true);
        }
    }

    enableScheduleLoop(loop_name, enable = true)
    {
        for (var i = 0; i < this.schedule_loop.length; i++) {
            if(this.schedule_loop[i].value == loop_name)
            {
                this.schedule_loop[i].enabled = enable;
            }
        };
    }

    daysFormat()
    {
        this.disable_days = false;

        if(this.schedule_loop_selected == 'month')
        {
            this.days = this.days_numbers;
        }
        else
        {
            if(this.schedule_loop_selected == 'day')
            {
                this.disable_days = true
            }

            this.days = this.days_names;
        }
    }
}

export default NewTransactionController;
