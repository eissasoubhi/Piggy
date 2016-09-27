import transactionsList_edit from './transactionsList.edit.modal.html';
import NewTransactionController from '../newTransaction/newTransaction.controller.js';

class TransactionsListController {
    constructor(TransactionsListService, $uibModal, NewTransactionService, GlobalOptionsService)
    {
        'ngInject';
        var parent = new NewTransactionController(NewTransactionService, GlobalOptionsService)

        this.__proto__.__proto__ = parent

        this.new_tran_service = NewTransactionService;
        this.tran_list_service = TransactionsListService;
        this.items_count = 0;
        this.items = [];
        this.modal = $uibModal;
        this.datatables_options = GlobalOptionsService.datatables_options
        this.loadInfo();
        this.transactions_();
    }

    transactions_()
    {
        var self = this;
        this.tran_list_service.transactions().success(function(data){
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
