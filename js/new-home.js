jQuery(document).ready(function(){
    jQuery(window).load(function() {
        var windowWidth = $(window).width();
        if(windowWidth > 991){
    	   jQuery('.equalheight-wrapper').equalheight();
        }
    });

    jQuery(window).resize(function(){
        jQuery('.equalheight-wrapper').css("height", "auto");
        var windowWidth = $(window).width();
        if(windowWidth > 991){
           jQuery('.equalheight-wrapper').equalheight();
        }
    });
});