class TransactionsListController {
<<<<<<< HEAD
    constructor(TransactionsListService) {
        'ngInject';
        this.service = TransactionsListService;
        this.loading = true;
        this.items_count = 0;
        this.items = [];

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
    }

    transactions(){
        var self = this;
        this.service.transactions().success(function(data){
            self.items = data
            self.items_count = data.length
            self.loading = false;
        })
    }

}

export default TransactionsListController;
