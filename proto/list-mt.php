<?php include_once 'partials/header.php'; ?>
            <!-- page content -->
            <div class="right_col" role="main">
                <div class="">
                    <div class="clearfix"></div>

                    <div class="row">

                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="x_panel">
                                <div class="x_title">
                                    <h2>List of Money trackers <small>20 items</small></h2>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">
                                    <table id="example" class="table table-striped responsive-utilities jambo_table">
                                        <thead>
                                            <tr class="headings">
                                                <th>
                                                    <input type="checkbox" class="tableflat">
                                                </th>
                                                <th>Name </th>
                                                <th>Location </th>
                                                <th>Parent group </th>
                                                <th>Created at </th>
                                                <th>Updated at </th>
                                                <th class=" no-link last"><span class="nobr">Action</span>
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr class="even pointer">
                                                <td class="a-center ">
                                                    <input type="checkbox" class="tableflat">
                                                </td>
                                                <td class=" ">Books</td>
                                                <td class=" ">Home </td>
                                                <td class=" "> - </td>
                                                <td class=" ">May 23, 2014 11:47:56 PM</td>
                                                <td class="a-right a-right "> May 23, 2014 11:47:56 PM</td>
                                                <td class=" last">
                                                    <a href="#"><i class="fa fa-info"></i></a>
                                                    <a href="#"><i class="fa fa-edit"></i></a>
                                                    <a href="#" title=""><i class="fa fa-times"></i></a>
                                                </td>
                                            </tr>
                                            <tr class="odd pointer selected">
                                                <td class="a-center ">
                                                    <input type="checkbox" class="tableflat">
                                                </td>
                                                <td class=" ">Traveling</td>
                                                <td class=" ">Home <i class="fa fa-angle-right"></i> Entertainment </td>
                                                <td class=" "> Entertainment </td>
                                                <td class=" ">May 23, 2014 11:30:12 PM</td>
                                                <td class="a-right a-right ">May 23, 2014 11:30:12 PM</td>
                                                <td class=" last">
                                                    <a href="#"><i class="fa fa-info"></i></a>
                                                    <a href="#"><i class="fa fa-edit"></i></a>
                                                    <a href="#" title=""><i class="fa fa-times"></i></a>
                                                </td>
                                            </tr>
                                            <tr class="even pointer">
                                                <td class="a-center ">
                                                    <input type="checkbox" checked class="tableflat">
                                                </td>
                                                <td class=" ">Clothes</td>
                                                <td class=" ">Home </td>
                                                <td class=" "> - </td>
                                                <td class=" "> May 24, 2014 10:55:33 PM</td>
                                                <td class="a-right a-right "> May 24, 2014 10:55:33 PM</td>
                                                <td class=" last">
                                                    <a href="#"><i class="fa fa-info"></i></a>
                                                    <a href="#"><i class="fa fa-edit"></i></a>
                                                    <a href="#" title=""><i class="fa fa-times"></i></a>
                                                </td>
                                            </tr>
                                            <tr class="odd pointer">
                                                <td class="a-center ">
                                                    <input type="checkbox" class="tableflat">
                                                </td>
                                                <td class=" ">Phone</td>
                                                <td class=" ">Home <i class="fa fa-angle-right"></i> Tech stuff</td>
                                                <td class=" "> Tech stuff </td>
                                                <td class=" "> May 24, 2014 10:52:44 PM</td>
                                                <td class="a-right a-right ">May 24, 2014 10:52:44 PM</td>
                                                <td class=" last">
                                                    <a href="#"><i class="fa fa-info"></i></a>
                                                    <a href="#"><i class="fa fa-edit"></i></a>
                                                    <a href="#" title=""><i class="fa fa-times"></i></a>
                                                </td>
                                            </tr>
                                            <tr class="odd pointer">
                                                <td class="a-center ">
                                                    <input type="checkbox" class="tableflat">
                                                </td>
                                                <td class=" ">Computer</td>
                                                <td class=" ">Home <i class="fa fa-angle-right"></i> Tech stuff</td>
                                                <td class=" "> Tech stuff </td>
                                                <td class=" "> May 19, 2013 10:52:44 PM</td>
                                                <td class="a-right a-right ">May 24, 2014 10:52:44 PM</td>
                                                <td class=" last">
                                                    <a href="#"><i class="fa fa-info"></i></a>
                                                    <a href="#"><i class="fa fa-edit"></i></a>
                                                    <a href="#" title=""><i class="fa fa-times"></i></a>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>

                        <br />
                        <br />
                        <br />

                    </div>
                </div>
                <!-- footer content -->
                <footer>
                    <div class="copyright-info">
                        <p class="pull-right">Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
                        </p>
                    </div>
                    <div class="clearfix"></div>
                </footer>
                <!-- /footer content -->
            </div>
            <!-- /page content -->
<?php include_once 'partials/footer.php'; ?>
    <script>
        $(document).ready(function() {
            $('input.tableflat').iCheck({
                checkboxClass: 'icheckbox_flat-green',
                radioClass: 'iradio_flat-green'
            });
        });

        var asInitVals = new Array();
        $(document).ready(function() {
            var oTable = $('#example').dataTable({
                "oLanguage": {
                    "sSearch": "Search all columns:"
                },
                "aoColumnDefs": [{
                        'bSortable': false,
                        'aTargets': [0]
                    } //disables sorting for column one
                ],
                'iDisplayLength': 12,
                "sPaginationType": "full_numbers",
                "dom": 'T<"clear">lfrtip',
                "tableTools": {
                    "sSwfPath": "js/datatables/tools/swf/copy_csv_xls_pdf.swf"
                }
            });
            $("tfoot input").keyup(function() {
                /* Filter on the column based on the index of this element's parent <th> */
                oTable.fnFilter(this.value, $("tfoot th").index($(this).parent()));
            });
            $("tfoot input").each(function(i) {
                asInitVals[i] = this.value;
            });
            $("tfoot input").focus(function() {
                if (this.className == "search_init") {
                    this.className = "";
                    this.value = "";
                }
            });
            $("tfoot input").blur(function(i) {
                if (this.value == "") {
                    this.className = "search_init";
                    this.value = asInitVals[$("tfoot input").index(this)];
                }
            });
        });
    </script>
</body>

</html>