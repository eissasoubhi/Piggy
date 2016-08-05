let breadcrumbsComponent = function ($parse)
{
    'ngInject';
    return{
        restrict: 'A',
        link: function(scope, element, attrs)
            {
                var model = $parse(attrs.breadcrumbs) ;
                var breadcrumbs;
                var arrow = attrs.arrow ? attrs.arrow : '<i class="fa fa-angle-right"></i> ';

                scope.$watch(model, function (newValue, oldValue, scope) {
                    // log("changed", newValue)
                    if(newValue && typeof newValue.join == "function")
                    {
                        breadcrumbs = newValue.join(' ' + arrow + ' ');
                    }
                    else
                    {
                        breadcrumbs = " - ";
                    }

                    $(element).html(breadcrumbs);
                })
            }
    }
}



export default breadcrumbsComponent;

