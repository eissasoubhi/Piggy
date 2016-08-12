let editScheduleComponent = function ($parse)
{
    'ngInject';
    return{
        restrict: 'A',
        link: function(scope, element, attrs)
            {
                setTimeout(function () {
                    var model = $parse(attrs.editSchedule);
                    var _scope = scope;
                    /*$(element).on('change', function () {
                        if(this.checked) {
                            log('checked')
                        }
                        else
                        {
                            log('unchecked')
                        }
                    })*/
                    function watchModel ()
                        {
                            scope.$watch(model, function(checked, oldValue, scope)
                            {
                                // log('checked', checked)
                                // log('scope', scope)
                                if(checked) {
                                    if(!scope.vm.editing.scheduled)
                                    {
                                        scope.vm.editing.scheduled = scope.vm.editing.default_schedule;
                                    }
                                }
                                else
                                {
                                    scope.vm.editing.scheduled = false;
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



export default editScheduleComponent;

