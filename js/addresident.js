
$(document).ready(function() {
	$('.form-search .btn').on('click', function(e){
    var firstName = $.trim($(this).prevAll('#firstName').val()).toLowerCase();
    var lastName = $.trim($(this).prevAll('#lastName').val()).toLowerCase();
    var designation = $.trim($(this).prevAll('#designation').val()).toLowerCase();
    console.log(firstName, lastName, designation );
    $('.resident-infocontainer').each(function(){
     	var $thisName = $(this).children('.resident-image-col').find('h4');
        var $thisDesg = $(this).children('.resident-image-col').find('.designation');
     	var searchKey1 = $thisName.text().toLowerCase();
        var searchKey2 = $thisDesg.text().toLowerCase();
     	if(searchKey1.indexOf(firstName) === -1 || searchKey1.indexOf(lastName) === -1 || searchKey2.indexOf(designation) === -1 )
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