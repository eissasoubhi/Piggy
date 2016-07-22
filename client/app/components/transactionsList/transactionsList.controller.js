import transactionsList_edit from './transactionsList.edit.modal.html';
class TransactionsListController {
    constructor(TransactionsListService, $uibModal) {
        'ngInject';
        this.service = TransactionsListService;
        this.loading = true;
        this.items_count = 0;
        this.items = [];
        this.test = 'component : test1 ';
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
    this.transactions();
    log('this', this.__proto__)
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

    edit(ev)
    {
        var ctrl = this;
        var modalInstance = this.modal.open({
        animation: true,
        template: transactionsList_edit,
        controller : function() {
            this.__proto__ = ctrl;
        },
        controllerAs: 'vm',
        size: 'lg',
        });

    }

    ok()
    {
        alert('ok then')
    }
}

export default TransactionsListController;
