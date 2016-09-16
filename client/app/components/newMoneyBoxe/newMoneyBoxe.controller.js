class NewMoneyBoxeController {
  constructor(NewMoneyBoxeService, GlobalOptionsService) {
    "ngInject";
    this.options = GlobalOptionsService.datatables_options
    this.money_boxe_group = [];
    this.service = NewMoneyBoxeService;
    this.loadInfo();
  }

    loadInfo()
    {
        var self = this;
        this.service.moneyBoxeGroups().success(function(money_boxe_group){
                self.money_boxe_group = money_boxe_group;
            })
    }
}

export default NewMoneyBoxeController;
