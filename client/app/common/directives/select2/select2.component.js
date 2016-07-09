let select2Component = function ($parse)
{
    'ngInject';
    return{
        restrict: 'A',
        scope: {
            selectChange: '&'
        },
        link: function(scope, element, attrs)
            {

                setTimeout(function () {
                    var model = $parse(attrs.select2);
                    var data = scope.$eval(attrs.options);

                    $(element).select2(data);
                    // $(element).hide();
                    var _scope = scope;

                    if(attrs.select2)
                    {
                        $(element).on('select2:select', function (evt) {
                            scope.$apply(function(){
                                model.assign(scope.$parent, evt.params.data.text);
                            });
                        });

                        // log('scope', scope)
                        scope.$parent.$watch(model, function(newValue, oldValue, scope) {
                            $(element).change();
                            _scope.selectChange()
                        });
                    }

                }, 0)
            }
    }
}



export default select2Component;

