$(document).ready(function() {
     $('#userTable').DataTable( {
        "dom": '<"addbuttons"> lBfrtip ',
        "buttons": ['csv'],
        "order": [],
        "columnDefs": [ { orderable: false, targets: [7]}]
    } );

    $("div.addbuttons").html('<div class="glyphicon glyphicon-plus" id="addRow">ADD USER</div><div class="fa fa-refresh" id="refresh">REFRESH</div>');

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

