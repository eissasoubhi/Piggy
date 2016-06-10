let jsDataTableComponent = function ()
{
    return{
        restrict: 'A',
        link: function(scope, element, attrs)
            {
                var data = scope.$eval(attrs.jsDataTable);
                $(element).dataTable(data);
            }
    }
}



export default jsDataTableComponent;

