let breadcrumbsComponent = function ()
{
    return{
        restrict: 'A',
        link: function(scope, element, attrs)
            {
                var data = scope.$eval(attrs.breadcrumbs) ;
                var breadcrumbs;
                var arrow = attrs.arrow ? attrs.arrow : '<i class="fa fa-angle-right"></i> ';
                if(data && typeof data.join == "function")
                {
                    breadcrumbs = data.join(' ' + arrow + '');
                }
                else
                {
                    breadcrumbs = " - ";
                }

                $(element).html(breadcrumbs);
            }
    }
}



export default breadcrumbsComponent;

