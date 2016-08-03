let breadcrumbsComponent = function ($parse)
{
    'ngInject';
    return{
        restrict: 'A',
        link: function(scope, element, attrs)
            {
                var model = $parse(attrs.breadcrumbs) ;
                // var data = model() ;
                // log(model)
                var breadcrumbs;
                var arrow = attrs.arrow ? attrs.arrow : '<i class="fa fa-angle-right"></i> ';
                // // log(data && typeof data.join == "function")
                // if(data && typeof data.join == "function")
                // {
                //     breadcrumbs = data.join(' ' + arrow + ' ');
                // }
                // else
                // {
                //     breadcrumbs = " - ";
                // }

                // $(element).html(breadcrumbs);

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

