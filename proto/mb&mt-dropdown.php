<?php
    $select =  '<select class="select2_group form-control" required="required">
                    <optgroup label="Money Boxes">
                        <option value="Bank account">Bank account</option>
                        <option value="Wallet">Wallet</option>
                    </optgroup>
                    <optgroup label="Money Trackers">
                        <option value="Books">Books</option>
                        <option value="Traveling">Traveling</option>
                        <option value="Clothes">Clothes</option>
                        <option value="Phone">Phone</option>
                        <option value="Computer">Computer</option>
                    </optgroup>
                </select> ';
    if (isset($selected)) {
        $select = str_replace('value="'.$selected.'"', 'selected value="'.$selected.'"', $select);
        // exit(htmlentities($select));
    }
    echo $select;
 ?>