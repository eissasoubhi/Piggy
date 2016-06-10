class MoneyTrackerGroupsListController {
  constructor() {
    this.datatable = {
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
            };  }
}

export default MoneyTrackerGroupsListController;
