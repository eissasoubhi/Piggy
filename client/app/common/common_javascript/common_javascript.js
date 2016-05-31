
    // // alert('ok')
    import 'expose?jQuery!jquery';
    import 'expose?$!jquery';
    import './utility/tools.js';
    // import './../../assets/js/nprogress.js';
    import 'bootstrap';
    // // import 'expose-loader?window.Gauge!./../../assets/js/gauge/gauge.min.js';
    // // console.info(new Gauge(''))
    // // import './../../assets/js/gauge/gauge_demo.js';
    // import './../../assets/js/progressbar/bootstrap-progressbar.min.js';
    // import './../../assets/js/nicescroll/jquery.nicescroll.min.js';
    import 'icheck';
    // import './../../assets/js/moment/moment.min.js';
    // import './../../assets/js/datepicker/daterangepicker.js';
    import 'chart.js';
    import './../../assets/js/custom.js';

    import 'dataTables';
    // import './../../assets/js/datatables/tools/js/dataTables.tableTools.js';

    // import './../../assets/js/flot/jquery.flot.js';
    // import './../../assets/js/flot/jquery.flot.pie.js';
    // import './../../assets/js/flot/jquery.flot.orderBars.js';
    // import './../../assets/js/flot/jquery.flot.time.min.js';
    // import './../../assets/js/flot/date.js';
    // import './../../assets/js/flot/jquery.flot.spline.js';
    // import './../../assets/js/flot/jquery.flot.stack.js';
    // import './../../assets/js/flot/curvedLines.js';
    // import './../../assets/js/flot/jquery.flot.resize.js';
    // import './../../assets/js/maps/jquery-jvectormap-2.0.3.min.js';
    // import './../../assets/js/maps/gdp-data.js';
    // import './../../assets/js/maps/jquery-jvectormap-world-mill-en.js';
    // import './../../assets/js/maps/jquery-jvectormap-us-aea-en.js';
    // import './../../assets/js/pace/pace.min.js';
    // import './../../assets/js/skycons/skycons.min.js';

    // import './../../assets/js/tags/jquery.tagsinput.min.js';
    // import './../../assets/js/switchery/switchery.min.js';
    // import './../../assets/js/editor/bootstrap-wysiwyg.js';
    // import './../../assets/js/editor/external/jquery.hotkeys.js';
    // import './../../assets/js/editor/external/google-code-prettify/prettify.js';
    import 'select2';
    // import 'select2/select2.css';
    // import './../../assets/js/parsley/parsley.min.js';
    // import './../../assets/js/textarea/autosize.min.js';
    //     autosize($('.resizable_textarea'));

    import 'expose?countries!./../../assets/js/autocomplete/countries.js';
    import './../../assets/js/autocomplete/jquery.autocomplete.js';
    var countriesArray = $.map(countries, function(value, key) {
        return {
            value: value,
            data: key
        };
    });
    // Initialize autocomplete with custom appendTo:
    $('#auocomplete_search').autocomplete({
        lookup: countriesArray,
        appendTo: '#auocomplete_search_container'
    });
