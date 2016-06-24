let breadcrumbsComponent = function ()
{
    return{
        restrict: 'A',
        link: function(scope, element, attrs)
            {
                var data = scope.$eval(attrs.breadcrumbs) ;

                var arrow = attrs.arrow ? attrs.arrow : '<i class="fa fa-angle-right"></i> ';
                var breadcrumbs = data.join(' ' + arrow + '');

                $(element).html(breadcrumbs);
            }
    }
}



export default breadcrumbsComponent;

