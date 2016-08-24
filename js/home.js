jQuery(document).ready(function(){
    jQuery(window).load(function() {
    		jQuery('.sixth-section .col-md-12 .panel .panel-heading').equalheight();
    		jQuery('.sixth-section .col-md-12 .panel .panel-body').equalheight();
    		jQuery('.sixth-section .padd0').equalheight();
    });

    jQuery(window).resize(function(){
    		jQuery('.sixth-section .col-md-12 .panel .panel-heading').equalheight();
    		jQuery('.sixth-section .col-md-12 .panel .panel-body').equalheight();
        jQuery('.sixth-section .padd0').equalheight();
    });

    // Method to show the Peer Review info pop up
    jQuery('.peer-review').on('click', function(){
      jQuery('#peerix-reviewpoint-modal .modal-content .modal-title').empty().html('<h3>Peer Review</h3>');
      jQuery('#peerix-reviewpoint-modal .modal-content .modal-body').empty().html(jQuery('#peer-review-content').html());
      jQuery('#peerix-reviewpoint-modal').modal('show');
    });

    // Method to show the Peer Point info pop up
    jQuery('.peer-point').on('click', function(){
      jQuery('#peerix-reviewpoint-modal .modal-content .modal-title').empty().html('<h3>Peer Point</h3>');
      jQuery('#peerix-reviewpoint-modal .modal-content .modal-body').empty().html(jQuery('#peer-point-content').html());
      jQuery('#peerix-reviewpoint-modal').modal('show');
    });
});