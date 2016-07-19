class TransactionsListController {
    constructor(TransactionsListService, $uibModal, $mdDialog) {
        'ngInject';
        this.service = TransactionsListService;
        this.loading = true;
        this.items_count = 0;
        this.items = [];
        this.test = 'eissa ok';
        this.modal0 = $uibModal;
        this.modal = $mdDialog;
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
        // https://angular-ui.github.io/bootstrap/#/modal
        var ctrl = this;
        var modalInstance = this.modal0.open({
        animation: true,
        templateUrl: 'myModalContent0.html',
        controller : function() {
            $.extend(true, this, ctrl);
            this.test  = 'eissa me'
            this.go = function  () {
                alert('hiiiiiii')
            }
        },
        controllerAs: 'vm',
        size: 'lg',
        });

        // var modal = this.modal;
        // modal.show({
        //     controller: function ($scope, $mdDialog) {
        //         'ngInject';
        //         $scope.test = 'test me';
        //         $scope.ok = function () {
        //             alert('ok')
        //         }
        //         $scope.hide = function() {
        //             $mdDialog.hide();
        //         };
        //         $scope.cancel = function() {
        //             $mdDialog.cancel();
        //         };
        //         $scope.answer = function(answer) {
        //             $mdDialog.hide(answer);
        //         };
        //     },
        //     templateUrl: 'myModalContent.html',
        //     parent: angular.element(document.body),
        //     targetEvent: ev,
        //     clickOutsideToClose:true,
        //     fullscreen: true
        // });

    }

    ok()
    {
        alert('ok')
    }

}

export default TransactionsListController;
