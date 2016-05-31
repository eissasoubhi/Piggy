let select2Component = function ()
{
    return{
        restrict: 'A',
        link: function(scope, element, attrs)
            {
                var data = scope.$eval(attrs.select2);
                $(element).select2(data);
                $(element).hide();
            }
    }
}



export default select2Component;

