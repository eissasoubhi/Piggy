let tranScheduleComponent = function ($parse)
{
    'ngInject';
    return{
        restrict: 'A',
        link: function(scope, element, attrs)
            {
                var model = $parse(attrs.tranSchedule) ;
                var tran_schedule, plural;

                scope.$watch(model, function (schedule, oldValue, scope) {
                    if(schedule && typeof schedule == "object")
                    {
                        plural = schedule.every > 1 ? true : false;
                        tran_schedule = "Every " + ( plural ? schedule.every + " " : "" ) + schedule.period + ( plural ? "s" : "" );
                    }
                    else
                    {
                        tran_schedule = " - ";
                    }

                    $(element).html(tran_schedule);
                }, true)
            }
    }
}



export default tranScheduleComponent;

