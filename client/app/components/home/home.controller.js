class HomeController {
  constructor() {
    this.name = 'home';
    this.linechart = {
                        type: "line",
                        data: {
                            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                            datasets: [{
                                label: "My First dataset",
                                backgroundColor: "rgba(38, 185, 154, 0.31)",
                                borderColor: "rgba(38, 185, 154, 0.7)",
                                pointBorderColor: "rgba(38, 185, 154, 0.7)",
                                pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                                pointHoverBackgroundColor: "#fff",
                                pointHoverBorderColor: "rgba(220,220,220,1)",
                                pointBorderWidth: 1,
                                data: [31, 74, 6, 39, 20, 85, 7, 89, 19, 66, 9, 99]
                            }, {
                                label: "My Second dataset",
                                backgroundColor: "rgba(3, 88, 106, 0.3)",
                                borderColor: "rgba(3, 88, 106, 0.70)",
                                pointBorderColor: "rgba(3, 88, 106, 0.70)",
                                pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
                                pointHoverBackgroundColor: "#fff",
                                pointHoverBorderColor: "rgba(151,187,205,1)",
                                pointBorderWidth: 1,
                                data: [82, 23, 66, 9, 99, 4, 2, 45, 78, 39, 20, 85]
                            }]
                        }
                    }
    this.barchart = {
            type: 'bar',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                datasets: [{
                    label: '# of Votes',
                    backgroundColor: "#26B99A",
                    data: [51, 30, 40, 28, 92, 50, 45, 56, 25, 48, 72, 34]
                }, {
                    label: '# of Votes',
                    backgroundColor: "#03586A",
                    data: [41, 56, 25, 48, 72, 34, 12, 50, 45, 56, 25, 4]
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
