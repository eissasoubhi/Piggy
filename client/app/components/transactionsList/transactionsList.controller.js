import transactionsList_edit from './transactionsList.edit.modal.html';
class TransactionsListController {
    constructor(TransactionsListService, $uibModal, NewTransactionService) {
        'ngInject';
        this.service = TransactionsListService;
        this.new_tran_service = NewTransactionService;
        this.loading = true;
        this.items_count = 0;
        this.money_boxes = [];
        this.money_trackers = [];
        this.days_numbers = [];
        this.schedule_every_array = [];
        this.schedule_every = 1;
        this.items = [];
        this.times = [];
        this.modal = $uibModal;
        this.datatables_options = {
                                    "oLanguage": {
                                        "sSearch": "Search all columns:"
                                    },
                                    "aoColumnDefs": [{
                                            'bSortable': false,
                                            'aTargets': [0]
                                        } //disables sorting for column one
                                    ],
                                    'iDisplayLength': 12,
                                    "sPaginationType": "full_numbers",
                                    "dom": 'T<"clear">lfrtip',
                                    "tableTools": {
                                        "sSwfPath": "app/assets/js/datatables/tools/swf/copy_csv_xls_pdf.swf"
                                    }
                                };
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
        this.transactions();
    }

    transactions()
    {
        var self = this;
        this.service.transactions().success(function(data){
            self.items = data
            self.items_count = data.length
            self.loading = false;
        })
    }

    edit(editing)
    {
        var ctrl = this;
        var modalInstance = this.modal.open({
        animation: true,
        template: transactionsList_edit,
        controller : function() {
            this.__proto__ = ctrl;
            this.editing = editing;
            this.options = {
                        templateResult: function (option)
                        {
                            function hightlight(path) {
                                var paths = path.split('>');
                                paths[paths.length - 1] = '<strong>' + paths[paths.length - 1] + '</strong>';
                                return paths.join('>');
                            }

                            function icon(type) {
                                if(type == 'mb')
                                {
                                    return '<i class="fa fa-archive"></i>';
                                }
                                else if(type == 'mt')
                                {
                                    return '<i class="fa fa-map"></i>';
                                }
                                else if(type.indexOf('group') > -1)
                                {
                                    return '<i class="fa fa-folder"></i>';
                                }

                                return '';
                            }

                            if($(option.element).data('type'))
                            {
                                var type = $(option.element).data('type');
                                return $('<div><span class="m_type">' + icon(type) + '</span>' + hightlight(option.text) + '</div>');
                            }

                            return $('<div>' + hightlight(option.text) + '</div>');
                        }
                    };
        },
        controllerAs: 'vm',
        size: 'lg',
        });

    }

    loadInfo()
    {
        var self = this;
        this.new_tran_service.moneyBoxes().success(function(money_boxes){
                self.money_boxes = money_boxes;
            })
        this.new_tran_service.moneyTrackers().success(function(money_trackers){
                self.money_trackers = money_trackers;
            })
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

}

export default TransactionsListController;
