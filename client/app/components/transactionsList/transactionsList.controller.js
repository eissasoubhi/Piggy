class TransactionsListController {
  constructor() {
    this.name = 'transactionsList';
    this.transactions_list = {
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
                                    "sSwfPath": "js/datatables/tools/swf/copy_csv_xls_pdf.swf"
                                }
                            };
  }
}

export default TransactionsListController;
