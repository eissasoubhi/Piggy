class HomeController {
  constructor() {

    this.daily_spendings_rate = 2501;
    this.daily_spendings_rate_change = 4;
    this.weekly_spendings_rate = 123.50;
    this.weekly_spendings_rate_change = 30;
    this.mounthly_spendings_rate = 2500;
    this.mounthly_incomes_rate = 4567;
    this.mounthly_incomes_rate_change = 120;
    this.mounthly_savings_rate = 2315;
    this.mounthly_savings_rate_change = 43;
    this.balance = 7325 ;
    this.balance_change = 340 ;
    this.cash_flow_data = {
        incomes : [31, 74, 6, 39, 20, 85, 7, 89, 19, 66, 9, 99],
        outcomes : [82, 23, 66, 9, 99, 4, 2, 45, 78, 39, 20, 85],
        year: 2016,
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    };

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
