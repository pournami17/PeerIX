$(document).ready(function() {
    var table = $('#userTable').DataTable( {
        "dom": '<"addbuttons"> lBfrtip ',
        "buttons": ['csv'],
        "order": [],
        "columnDefs": [ { orderable: false, targets: [7]}]
    } );

    $("div.addbuttons").html('<div class="glyphicon glyphicon-plus" id="addRow">ADD USER</div><div class="fa fa-refresh" id="refresh">REFRESH</div>');

    $("#viewUserModel").click(function(){
        $('#userView').modal('show');
        var data = table.row( $(this).parents('tr') ).data();
        $("#userView .modal-body .firstName").html(data[0]);
        $("#userView .modal-body .lastName").html(data[1]);
        $("#userView .modal-body .email").html(data[2]);
        $("#userView .modal-body .role").html(data[3]);
        $("#userView .modal-body .year").html(data[4]);
        $("#userView .modal-body .integratedType").html(data[5]);
        $("#userView .modal-body .GraduationType").html(data[6]);
    });

    $("#editUserModel").click(function(){
         $('#userEdit').modal('show');
         rowDetails();
    });

    $('#deleteUser').click( function () {
        console.log("ll")
        $(this).parents('tr').remove();
    } );

   //  $(".peer-review").click(function() {
   //  	$('#userTable').dataTable();
   //  	console.log("va")
 		// });

    // var t = $('#userTable').DataTable();
    // var counter = 1;

    // $('#addRow').on( 'click', function () {
    // 	console.log("va")
    //     t.row.add( [
    //         counter +'.1',
    //         counter +'.2',
    //         counter +'.3',
    //         counter +'.4',
    //         counter +'.5',
    //         counter +'.6',
    //         counter +'.7',
    //         counter +'.8',
    //         counter +'.8'
    //     ] ).draw( false );

    //     counter++;
    // } );

} );

