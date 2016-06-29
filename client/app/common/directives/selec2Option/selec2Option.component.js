let selec2OptionComponent = function ($parse)
{
    'ngInject';
    return{
        restrict: 'A',
        link: function(scope, element, attrs)
            {
                var model = $parse(attrs.selec2Option);
                log(model)
                scope.$watch(model, function(newValue, oldValue, scope) {
                    log('newValue', newValue)
                        });
            }
    }
}



export default selec2OptionComponent;

