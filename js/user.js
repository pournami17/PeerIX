$(document).ready(function() {
    var table = $('#userTable').DataTable( {
        "dom": '<"addbuttons"> lBfrtip ',
        "buttons": ['csv'],
        "order": [],
        "columnDefs": [ { orderable: false, targets: [7]}]
    } );

    $("div.addbuttons").html('<div class="glyphicon glyphicon-plus btn-add-user" id="addRow">ADD USER</div><div class="fa fa-refresh" id="refresh">REFRESH</div>');

    $( "tr" ).each(function(index) {
        $(this).find('#viewUserModel').click(function(){
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
    });

    $( "tr" ).each(function(index) {
        $(this).find('#editUserModel').click(function(){
             $('#userEdit').modal('show');
             rowDetails();
        });
    });

    $( "tr" ).each(function(index) {
        $(this).find('#deleteUser').click(function(){
            console.log("ll")
            $(this).parents('tr').remove();
        });
    });
    $('.btn-add-user').click(function(){
        $('#addRowModal').modal('toggle');
    });

    $('#addRowModal .btn-add').on('click',function(){
        var firstName = $('#addRowModal #firstname').val();
        var lastName = $('#addRowModal #lastname').val();
        var email = $('#addRowModal #email').val();
        var role = $('#addRowModal #role').val();
        var year = $('#addRowModal #year').val();
        var integratedType = $('#addRowModal #integratedtype').val();
        var graduationYear = $('#addRowModal #graduationYear').val();
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(role);
        console.log(year);
        console.log(integratedType);
        console.log(graduationYear);
        var lastColumn = $('#userTable').find('tr td:last-child').html();
        var t = $('#userTable').DataTable();
        t.row.add([firstName,lastName,email,role,year,integratedType,graduationYear,lastColumn]).draw();
        $(this).parents().find("#addRowModal").modal('hide');
    });
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

