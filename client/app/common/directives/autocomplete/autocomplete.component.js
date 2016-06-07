let autocompleteComponent = function ()
{
    return{
        restrict: 'A',
        link: function(scope, element, attrs)
            {
                var data = scope.$eval(attrs.autocomplete);
                var append_to = attrs.append_to;
                $(element).autocomplete({
                    lookup: data,
                    appendTo: append_to
                });
            }
    }
}

export default autocompleteComponent;

