
$(document).ready(function() {
	$('.form-search .btn').on('click', function(e){
    var firstName = $.trim($(this).prevAll('#firstName').val()).toLowerCase();
    var lastName = $.trim($(this).prevAll('#lastName').val()).toLowerCase();
    var designation = $.trim($(this).prevAll('#designation').val()).toLowerCase();
    console.log(firstName, lastName, designation )
    $('.resident-details h4').each(function(){
     	var $this = $(this);
     	var searchKey = $this.text().toLowerCase();
     	if(searchKey.indexOf(firstName) === -1 || searchKey.indexOf(lastName) === -1 )
        $this.closest('.resident-infocontainer').fadeOut();
      else $this.closest('.resident-infocontainer').fadeIn();
    });
    $('.resident-details .designation').each(function(){
     	var $this = $(this);
     	var searchKey = $this.text().toLowerCase();
     	if(searchKey.indexOf(designation) === -1 )
        $this.closest('.resident-infocontainer').fadeOut();
      else $this.closest('.resident-infocontainer').fadeIn();
    });
	});
});