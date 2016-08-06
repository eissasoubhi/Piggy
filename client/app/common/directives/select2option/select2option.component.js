let select2optionComponent = function ($parse)
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
                            var all_options = scope.$parent.vm.schedule_loop;
                            var value = select.find('option').not(':disabled').first().val()
                            var data = scope.$eval(select.attr('options'));
                            var selected = scope.$eval($(element).parents('select').attr('select2'))
                            if(selected)
                            {
                                for (var i = 0; i < all_options.length; i++) {
                                    if(all_options[i].value == selected)
                                    {
                                        if(all_options[i].enabled)
                                        {
                                            select.val(all_options[i].value);
                                        }
                                        else
                                        {
                                            select.val(value);
                                        }
                                        break;
                                    }
                                };

                                select.select2(data);
                                select.change();
                            }
                    }, 0)
                })
            }
    }
}



export default select2optionComponent;

