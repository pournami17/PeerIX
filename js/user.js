$(document).ready(function() {
    var table = $('#userTable').DataTable( {
        "dom": '<"addbuttons"> lBfrtip ',
        "buttons": ['csv'],
        "order": [],
        "columnDefs": [ { orderable: false, targets: [7]}]
    } );

    $("div.addbuttons").html('<div class="glyphicon glyphicon-plus btn-add-user" id="addRow">ADD USER</div><div class="fa fa-refresh" id="refresh">REFRESH</div>');

    $('.btn-add-user').click(function(){
        $('#addRowModal').modal('toggle');
    });

    var usersDetails = [];
    $('#addRowModal .btn-add').on('click',function(){
        $('.resident-info input[type=checkbox]').each(function () {
            if(this.checked) {
                var firstName = $(this).parent().find('.resident-image-col .resident-details .firstName').html();
                var lastName = $(this).parent().find('.resident-image-col .resident-details .lastName').html();
                var email = '';
                var role = $(this).parent().find('.resident-image-col .resident-details .designation').html();
                var year = '';
                var integratedType = '';
                var graduationYear = '';
                var lastColumn = $('#userTable').find('tr td:last-child').html();
                var user = {
                    "firstName" :firstName,
                    "lastName" :lastName,
                    "email" :email,
                    "role" :role,
                    "year" :year,
                    "integratedType" :integratedType,
                    "graduationYear" :graduationYear,
                    "lastColumn" :lastColumn
                 };
                 usersDetails.push(user);
            }
        });
        var arrayLength = usersDetails.length;
        for (var i = 0; i < arrayLength; i++) {
            var firstName = usersDetails[i].firstName;
            var lastName = usersDetails[i].lastName;
            var email = '';
            var role = usersDetails[i].role;
            var year = '';
            var integratedType = '';
            var graduationYear = '';
            var lastColumn = usersDetails[i].lastColumn;
            var t = $('#userTable').DataTable();
            t.row.add([firstName,lastName,email,role,year,integratedType,graduationYear,lastColumn]).draw();
        }
        $(this).parents().find("#addRowModal").modal('hide');
    });

    $('.form-search .btn').on('click', function(e){
        var firstName = $.trim($(this).prevAll('#firstName').val()).toLowerCase();
        var lastName = $.trim($(this).prevAll('#lastName').val()).toLowerCase();
        var designation = $.trim($(this).prevAll('#designation').val()).toLowerCase();
        $('.resident-infocontainer').each(function(){
            var $thisName = $(this).children('.resident-image-col').find('h4');
            var $thisDesg = $(this).children('.resident-image-col').find('.designation');
            var searchKey1 = $thisName.text().toLowerCase();
            var searchKey2 = $thisDesg.text().toLowerCase();
            if(searchKey1.indexOf(firstName) === -1 || searchKey1.indexOf(lastName) === -1 || searchKey2.indexOf(designation) === -1 )
                $(this).closest('.resident-infocontainer').fadeOut();
        });
    });

    $( "#userTable" ).delegate("#viewUserModel", "click", function(event) {
            $('#userView').modal('show');
            var data = table.row( $(this).parents('tr') ).data();
            $("#userView .modal-body .firstName").html(data[0]);
            $("#userView .modal-body .lastName").html(data[1]);
            $("#userView .modal-body .email").html(data[2]);
            $("#userView .modal-body .role").html(data[3]);
            $("#userView .modal-body .year").html(data[4]);
            $("#userView .modal-body .integratedType").html(data[5]);
            $("#userView .modal-body .GraduationType").html(data[6]);
        // });
    });

    $( "#userTable" ).delegate("#editUserModel", "click", function(event) {
         $('#userEdit').modal('show');
    });

    $( "#userTable" ).delegate("#deleteUser", "click", function(event) {
        $(this).parents('tr').remove();
    });

} );

