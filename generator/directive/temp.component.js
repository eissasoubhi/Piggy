let <%= name %>Component = function ()
{
    return{
        restrict: 'A',
        link: function(scope, element, attrs)
            {
                var data = scope.$eval(attrs.<%= name %>);
                $(element).click(function(event) {
                    console.log('<%= name %> directive was successfully implimented with data : ')
                    console.log(attrs.<%= name %>)
                });
            }
    }
}



export default <%= name %>Component;

