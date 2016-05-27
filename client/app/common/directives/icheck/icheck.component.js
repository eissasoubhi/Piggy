let icheckComponent = function ()
{
    return{
        restrict: 'A',
        link: function(scope, element, attrs)
            {
                var data = scope.$eval(attrs.icheck);
                $(element).click(function(event) {
                    console.log('icheck was successfully implimented with data : ')
                    console.log(attrs.icheck)
                });
            }
    }
}



export default icheckComponent;

