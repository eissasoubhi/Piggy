class TransactionsListController {
    constructor(TransactionsListService, $uibModal) {
        'ngInject';
        this.service = TransactionsListService;
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

    edit()
    {
        // https://angular-ui.github.io/bootstrap/#/modal
        var modalInstance = this.modal.open({
        animation: true,
        template: '<div class="modal-header"> <h3 class="modal-title">I\'m a modal!</h3> </div> <div class="modal-body"> <ul> <li ng-repeat="item in items"> <a href="#" ng-click="$event.preventDefault();"></a> </li> </ul> Selected: <b> selected.item</b> </div> <div class="modal-footer"> <button class="btn btn-primary" type="button" ng-click="">OK</button> <button class="btn btn-warning" type="button" ng-click="">Cancel</button> </div>',
        // controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {
        /*items: function () {
          return $scope.items;
        }*/
        }
        });
    }

}

export default TransactionsListController;
