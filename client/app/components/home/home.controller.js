class HomeController {
  constructor(HomeService) {
        'ngInject';
        this.service = HomeService;
        this.loading = true;
        this.incomes_simple_color = "#26B99A";
        this.outcomes_simple_color = "#03586A";
        this.incomes_border_color = "rgba(38, 185, 154, 0.7)" ;
        this.incomes_background_color = "rgba(38, 185, 154, 0.31)" ;
        this.outcomes_border_color = "rgba(3, 88, 106, 0.70)" ;
        this.outcomes_background_color = "rgba(3, 88, 106, 0.3)" ;

        this.moneyInfo();
    }

    moneyInfo(){
        var self = this;
        this.service.info().success(function(data){
            self.setProperties(data);
            self.setCharts();
            self.loading = false;
        })
    }

    setProperties(data) {
        angular.extend(this, data);
    }


    setCharts() {
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
