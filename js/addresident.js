
$(document).ready(function() {
	$('.form-search .btn').on('click', function(e){
        var firstName = $.trim($(this).parent().parent().find('#firstName').val()).toLowerCase();
        var lastName = $.trim($(this).parent().parent().find('#lastName').val()).toLowerCase();
        var designation = $.trim($(this).parent().parent().find('#designation').val()).toLowerCase();
        $('.resident-infocontainer').each(function(){
            var $thisName1 = $(this).children('.resident-image-col').find(' .resident-details .firstName');
            var $thisName2 = $(this).children('.resident-image-col').find(' .resident-details .lastName');
            var $thisDesg = $(this).children('.resident-image-col').find(' .resident-details .designation');
            var searchKey1 = $thisName1.text().toLowerCase();
            var searchKey2 = $thisName2.text().toLowerCase();
            var searchKey3 = $thisDesg.text().toLowerCase();
            if(searchKey1.indexOf(firstName) === -1 || searchKey2.indexOf(lastName) === -1 || searchKey3.indexOf(designation) === -1 )
                $(this).closest('.resident-infocontainer').fadeOut();
        });
    });

    $(".save-resident-changes").on('click', function(){
        $('#add-resident-modal').modal('hide');
        $('.resident-info').prepend('<div class="alert alert-success text-center">Class added successfully</div>');
        setTimeout(function() {
            $(".alert").alert('close');
        }, 2000);
    });

});