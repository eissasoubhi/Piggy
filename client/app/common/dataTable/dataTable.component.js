let dataTableComponent = function ()
{
    log('xs')
    return{
        restrict: 'A',
        link: function(scope, element, attrs)
            {
                log(attrs)
                var data = scope.$eval(attrs.dataTable);
                var oTable = $(element).dataTable(data);
            }
    }
};

export default dataTableComponent;
