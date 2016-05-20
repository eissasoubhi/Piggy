Chart.defaults.global.legend = {
    enabled: false
};

/*var data = {
    labels: [
        "Symbian",
        "Blackberry",
        "Other",
        "Android",
        "IOS"
    ],
    datasets: [{
        data: [15, 20, 30, 10, 30],
        backgroundColor: [
            "#BDC3C7",
            "#9B59B6",
            "#455C73",
            "#26B99A",
            "#3498DB"
        ],
        hoverBackgroundColor: [
            "#CFD4D8",
            "#B370CF",
            "#34495E",
            "#36CAAB",
            "#49A9EA"
        ]

    }]

// line chart
var ctx = document.getElementById("lineChart");
log(ctx);
var lineChart = new Chart(ctx, {
    type: 'line',
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
    },
});

// Bar chart
var ctx = document.getElementById("mybarChart");
var mybarChart = new Chart(ctx, {
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
});

/*


var cb = function(start, end, label) {
    console.log(start.toISOString(), end.toISOString(), label);
    $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    //alert("Callback has fired: [" + start.format('MMMM D, YYYY') + " to " + end.format('MMMM D, YYYY') + ", label = " + label + "]");
}

var optionSet1 = {
    startDate: moment().subtract(29, 'days'),
    endDate: moment(),
    minDate: '01/01/2012',
    maxDate: '12/31/2015',
    dateLimit: {
        days: 60
    },
    showDropdowns: true,
    showWeekNumbers: true,
    timePicker: false,
    timePickerIncrement: 1,
    timePicker12Hour: true,
    ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    opens: 'left',
    buttonClasses: ['btn btn-default'],
    applyClass: 'btn-small btn-primary',
    cancelClass: 'btn-small',
    format: 'MM/DD/YYYY',
    separator: ' to ',
    locale: {
        applyLabel: 'Submit',
        cancelLabel: 'Clear',
        fromLabel: 'From',
        toLabel: 'To',
        customRangeLabel: 'Custom',
        daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        firstDay: 1
    }
};
$('#reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
$('#reportrange').daterangepicker(optionSet1, cb);
$('#reportrange').on('show.daterangepicker', function() {
    console.log("show event fired");
});
$('#reportrange').on('hide.daterangepicker', function() {
    console.log("hide event fired");
});
$('#reportrange').on('apply.daterangepicker', function(ev, picker) {
    console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
});
$('#reportrange').on('cancel.daterangepicker', function(ev, picker) {
    console.log("cancel event fired");
});
$('#options1').click(function() {
    $('#reportrange').data('daterangepicker').setOptions(optionSet1, cb);
});
$('#options2').click(function() {
    $('#reportrange').data('daterangepicker').setOptions(optionSet2, cb);
});
$('#destroy').click(function() {
    $('#reportrange').data('daterangepicker').remove();
});


NProgress.done();
*/