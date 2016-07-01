class MoneyBoxesListController {
    constructor(MoneyBoxesListService, $uibModal) {
        'ngInject';
        this.service = MoneyBoxesListService;
        this.loading = true;
        this.items_count = 0;
        this.items = [];
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
        this.moneyBoxes();
    }

    moneyBoxes()
    {
        var self = this;
        this.service.moneyBoxes().success(function(data){
            self.items = data
            self.items_count = data.length
            self.loading = false;
        })
    }

    edit()
    {

    }
}

export default MoneyBoxesListController;
