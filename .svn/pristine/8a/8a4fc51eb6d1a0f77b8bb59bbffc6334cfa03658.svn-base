
$(document).ready(function () {
    //------------------------------------------------------------

    $('#idBtn2Remaining').bind('click', function(){
        var sel = $('#idDlGot').datalist("getSelections");
        $.each(sel, function(i, row) {
            //alert(row.code + "," + row.name);
            $('#idDlRemaining').datalist("appendRow", row);
            $('#idDlGot').datalist("deleteRow", $('#idDlGot').datalist("getRowIndex", row));
        });
    });

});
