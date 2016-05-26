let chartComponent = function ()
{
    return{
        restrict: 'A',
        link: function(scope, element, attrs)
            {
                var chart_data = scope.$eval(attrs.chart);
                var chart = new Chart(element, chart_data);
            }
    }
}



export default chartComponent;
