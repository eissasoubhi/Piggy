class TransactionsListController {
  constructor() {
    this.items_count = 20;
    this.selected_class = 'even';

    this.items = [
        {
            "from": "Bank account",
            "to": ["Wallet"],
            "amount": "$150",
            "scheduled": false,
            "next_scheduled_tran": false,
            "created_at": "May 23, 2014 11:47:56 PM",
            "updated_at": "May 23, 2014 11:47:56 PM",
        },
        {
            "from": "Bank account",
            "to": ["Home", "House stuff", "House Rent"],
            "amount": "$530",
            "scheduled": "Every month",
            "next_scheduled_tran": "Jan 23, 2014 11:47:56 PM",
            "created_at": "May 23, 2014 11:47:56 PM",
            "updated_at": "May 23, 2014 11:47:56 PM",
        },
        {
            "from": "Wallet",
            "to": ["Home", "Tech stuff", "Phone"],
            "amount": "$100",
            "scheduled": false,
            "next_scheduled_tran": false,
            "created_at": "May 23, 2014 11:47:56 PM",
            "updated_at": "May 23, 2014 11:47:56 PM",
        },
        {
            "from": "Bank account",
            "to": ["Home", "House stuff", "House gas"],
            "amount": "$10",
            "scheduled": "Every month",
            "next_scheduled_tran": "Jan 23, 2014 11:47:56 PM",
            "created_at": "May 23, 2014 11:47:56 PM",
            "updated_at": "May 23, 2014 11:47:56 PM",
        },
        {
            "from": "Bank account",
            "to": ["Home", "House stuff", "House electricity"],
            "amount": "$15",
            "scheduled": "Every month",
            "next_scheduled_tran": "Jan 23, 2014 11:47:56 PM",
            "created_at": "May 23, 2014 11:47:56 PM",
            "updated_at": "May 23, 2014 11:47:56 PM",
        }
    ]
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
                                    "sSwfPath": "app/assets/js/datatables/tools/swf/copy_csv_xls_pdf.swf"
                                }
                            };
  }

  toggleClass()
  {
    if(this.selected_class == 'even')
    {
        this.selected_class = 'odd';
    }
    else
    {
        this.selected_class = 'even';
    }


    return this.selected_class
  }
}

export default TransactionsListController;
