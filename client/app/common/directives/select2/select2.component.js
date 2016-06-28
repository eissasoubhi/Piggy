let select2Component = function ($parse)
{
    'ngInject';
    return{
        restrict: 'A',
        link: function(scope, element, attrs)
            {
                var model = $parse(attrs.select2);

                setTimeout(function () {
                    var data = scope.$eval(attrs.options);
                    $(element).select2(data);
                    $(element).hide();

                    if(attrs.select2)
                    {
                        $(element).on('select2:select', function (evt) {
                            scope.$apply(function(){
                                model.assign(scope, evt.params.data.text);
                            });
                        });

                        scope.$watch(model, function(newValue, oldValue, scope) {
                            $(element).change();
                        });
                    }

                }, 0)
            }
    }
}



export default select2Component;

