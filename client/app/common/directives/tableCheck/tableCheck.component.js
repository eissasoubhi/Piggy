let tableCheckComponent = function ()
{
    return{
        restrict: 'A',
        link: function(scope, element, attrs)
            {
                var check_all_selector = attrs.tableCheck || false;

                $(element).on('ifChecked', function () {
                    $(this).parents('tr').addClass('selected');
                    countChecked("check");
                });

                $(element).on('ifUnchecked', function () {
                    $(this).parents('tr').removeClass('selected');
                    countChecked("uncheck");
                });

                function countChecked(action) {
                    if (check_all_selector ) {
                        $(element).parents('table').find(check_all_selector).iCheck(action);
                    }
                    // var n = $(".bulk_action input[name='table_records']:checked").length;
                    // if (n > 0) {
                        // $('.column-title').hide();
                        // $('.bulk-actions').show();
                        // $('.action-cnt').html(n + ' Records Selected');
                    // } else {
                        // $('.column-title').show();
                        // $('.bulk-actions').hide();
                    // }
                }
            }
    }
}



export default tableCheckComponent;

