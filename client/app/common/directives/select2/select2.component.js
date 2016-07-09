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
                    var bytext = typeof attrs.selectBytext == "undefined" ? false : true ;

                    $(element).select2(data);
                    $(element).hide();
                    var _scope = scope;

                    if(attrs.select2)
                    {
                        $(element).on('select2:select', function (evt) {
                            // log($(this).val())
                            scope.$apply(function(){
                                if(bytext)
                                {
                                    model.assign(scope.$parent, evt.params.data.text);
                                }
                                else
                                {
                                    model.assign(scope.$parent, evt.params.data.id );
                                }

                                scope.$parent.refresh_modal = false;
                            });
                        });

                        $(element).on('change', function (evt) {
                            var select = $(this)
                            var val = select.val()

                            setTimeout(function  () {
                                 scope.$apply(function(){
                                    if(bytext)
                                    {
                                        var text = select.find('option[value="' + val + '"]').text()
                                        model.assign(scope.$parent, text);
                                    }
                                    else
                                    {
                                        model.assign(scope.$parent, val );
                                    }

                                    scope.$parent.refresh_modal = false;
                                });
                            }, 0)
                        });

                        scope.$parent.$watch(model, function(newValue, oldValue, scope) {
                            var refresh = typeof scope.refresh_modal == 'undefined' ? true : scope.refresh_modal;

                            if(refresh)
                            {
                                var selected_value = newValue;
                                if(bytext)
                                {
                                    selected_value = $(element).find('option').filter(function () {
                                                            return $(this).html() == newValue
                                                        }).val();
                                }
                                $(element).val(selected_value)
                                $(element).change();
                            }

                            _scope.selectChange()
                            scope.refresh_modal = true;
                        });
                    }

                }, 0)
            }
    }
}



export default select2Component;

