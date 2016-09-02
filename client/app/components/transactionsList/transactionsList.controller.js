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
            // info("items", self.items)
        })
    }

    edit(editing)
    {
        var ctrl = this;
        this.modal_instance = this.modal.open({
        animation: true,
        template: transactionsList_edit,
        controller : function() {
            this.__proto__ = ctrl;
            this.editing_model = editing;
            this.editing = $.extend(true, {}, editing);
            this.editing.edit_schedule = !!this.editing.scheduled;
            this.editing.default_schedule = {"every": 1, "period": "month", "on": 1, "at": 0 };
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
                'value': i,
                'text': time_format + ':00'
            })
        };
    }

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

    daysFormat(select, scope)
    {
        var self = scope.vm;
        var selected = scope.$eval(select.attr('select2'))

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

    validateScheduleLoop(select, scope)
    {
        var self = scope.vm;
        var selected = scope.$eval(select.attr('select2'))
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

    enableScheduleLoop(loop_name, enable = true)
    {
        for (var i = 0; i < this.schedule_loop.length; i++) {
            if(this.schedule_loop[i].value == loop_name)
            {
                this.schedule_loop[i].enabled = enable;
            }
        };
    }

    setAttrFrom(select, scope)
    {
        var path = select.find(":selected").attr('breadcrumbs');
        scope.vm.editing.from = JSON.parse(path);
    }

    setAttrTo(select, scope)
    {
        var path = select.find(":selected").attr('breadcrumbs');
        scope.vm.editing.to = JSON.parse(path);
    }

    update()
    {
        $.extend(this.editing_model, this.editing);
        this.close();
    }

    remove(index)
    {
        this.items.splice(index, 1);
        info(this.items)
    }

    close()
    {
        this.modal_instance.dismiss('cancel');
    }
}

export default TransactionsListController;
