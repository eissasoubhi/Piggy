let select2optionComponent = function ($parse, $compile)
{
    'ngInject';
    return{
        restrict: 'A',
        link: function(scope, element, attrs)
            {
                var model = $parse(attrs.select2option);
                scope.$watch(model, function(newValue, oldValue, scope) {
                    setTimeout(function  () {
                        var select = $(element).parents('select');
                        var value = select.find('option').not(':disabled').first().val()
                        var data = scope.$eval(select.attr('options'));

                        select.val(value);
                        select.select2(data);
                    }, 0)
                })
            }
    }
}



export default select2optionComponent;

