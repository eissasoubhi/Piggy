import moneyBoxesList_edit from './moneyBoxesList.edit.modal.html';
import NewMoneyBoxeController from '../newMoneyBoxe/newMoneyBoxe.controller.js';
class MoneyBoxesListController {
    constructor(MoneyBoxesListService, $uibModal, NewMoneyBoxeService, GlobalOptionsService) {
        'ngInject';
        var parent = new NewMoneyBoxeController(NewMoneyBoxeService, GlobalOptionsService)

        this.__proto__.__proto__ = parent

        this.service = MoneyBoxesListService;
        this.loading = true;
        this.items_count = 0;
        this.items = [];
        this.modal = $uibModal;

        this.datatables_options = GlobalOptionsService.datatables_options
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

    edit(editing)
    {
        var ctrl = this;
        this.modal_instance = this.modal.open({
        animation: true,
        template: moneyBoxesList_edit,
        controller : function() {
            this.__proto__ = ctrl;
            this.editing_model = editing;
            this.editing = $.extend(true, {}, editing);

        },
        controllerAs: 'vm',
        size: 'lg',
        });

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

export default MoneyBoxesListController;
