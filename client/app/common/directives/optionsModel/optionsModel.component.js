let optionsModelComponent = function ($parse)
{
    'ngInject';
    return{
        restrict: 'A',
        link: function(scope, element, attrs)
            {
                setTimeout(function () {
                    var model = $parse(attrs.optionsModel);
                        function watchModel ()
                        {
                            scope.$watch(model, function(newValue, oldValue, scope)
                            {
                                var parent_model = scope.$eval($(element).parents('select').attr('select2'))
                                if(parent_model)
                                {
                                    $(element).parents('select').change()
                                }
                            });
                        }
                        scope.$apply(function  () {
                            watchModel();
                        })

                }, 0)
            }
    }
}



export default optionsModelComponent;

