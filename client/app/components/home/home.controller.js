class HomeController {
  constructor(HomeService) {
    'ngInject';
    this.service = HomeService;
    this.loading = true;

    this.moneyInfo = function(){
        this.service.info().success(function(data){
            this.loading = false;

            this.daily_spendings_rate = data.daily_spendings_rate;
            this.daily_spendings_rate_change = data.daily_spendings_rate_change;
            this.weekly_spendings_rate = data.weekly_spendings_rate;
            this.weekly_spendings_rate_change = data.weekly_spendings_rate_change;
            this.mounthly_spendings_rate = data.mounthly_spendings_rate;
            this.mounthly_incomes_rate = data.mounthly_incomes_rate;
            this.mounthly_incomes_rate_change = data.mounthly_incomes_rate_change;
            this.mounthly_savings_rate = data.mounthly_savings_rate;
            this.mounthly_savings_rate_change = data.mounthly_savings_rate_change;
            this.balance = data.balance;
            this.balance_change = data.balance_change;
            this.cash_flow_data = data.cash_flow_data;
        })
    }


    this.incomes_simple_color = "#26B99A";
    this.outcomes_simple_color = "#03586A";
    this.incomes_border_color = "rgba(38, 185, 154, 0.7)" ;
    this.incomes_background_color = "rgba(38, 185, 154, 0.31)" ;
    this.outcomes_border_color = "rgba(3, 88, 106, 0.70)" ;
    this.outcomes_background_color = "rgba(3, 88, 106, 0.3)" ;

    this.cash_flow_linechart = {
                        type: "line",
                        data: {
                            labels: this.cash_flow_data.months,
                            datasets: [{
                                label: this.cash_flow_data.year + " cash flow",
                                backgroundColor: this.incomes_background_color,
                                borderColor: this.incomes_border_color,
                                pointBorderColor: this.incomes_border_color,
                                pointBackgroundColor: this.incomes_border_color,
                                pointHoverBackgroundColor: "#fff",
                                pointHoverBorderColor: "rgba(220,220,220,1)",
                                pointBorderWidth: 1,
                                data: this.cash_flow_data.incomes
                            }, {
                                label: this.cash_flow_data.year + " cash flow",
                                backgroundColor: this.outcomes_background_color ,
                                borderColor: this.outcomes_border_color,
                                pointBorderColor: this.outcomes_border_color,
                                pointBackgroundColor: this.outcomes_border_color,
                                pointHoverBackgroundColor: "#fff",
                                pointHoverBorderColor: "rgba(151,187,205,1)",
                                pointBorderWidth: 1,
                                data: this.cash_flow_data.outcomes
                            }]
                        }
                    }

    this.cash_flow_barchart = {
            type: 'bar',
            data: {
                labels: this.cash_flow_data.months,
                datasets: [{
                    label: '# of Votes',
                    backgroundColor: this.incomes_simple_color,
                    data: this.cash_flow_data.incomes
                }, {
                    label: '# of Votes',
                    backgroundColor: this.outcomes_simple_color,
                    data: this.cash_flow_data.outcomes
                }]
            },

            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        }
    }
}

export default HomeController;
