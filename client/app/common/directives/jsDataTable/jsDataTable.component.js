let jsDataTableComponent = function ()
{
    return{
        restrict: 'A',
        link: function(scope, element, attrs)
            {
                if(scope.$last)
                {
                    setTimeout(function () {
                            var data = scope.$eval(attrs.jsDataTable);
                            $(element).parents('table').dataTable(data);
                    }, 0)
                }

            }
    }
}



export default jsDataTableComponent;

