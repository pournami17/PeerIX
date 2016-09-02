$(document).ready(function(){
    $('.filterable .more').click(function(){
        $(this).parents('.filterable').find('tbody').append('<tr><td>John</td><td>85%</td></tr>');
    });

    $(".turnarrow").on('click',function(){
        console.log("clicked");
        $(".navbar-toggle").addClass("is-active");
    });

    $(".btn-dashboard-menu").click(function(){
        $('.dashboard-menu-options .list-group').slideToggle();
    })

    $(window).load(function() {
        var windowWidth = $(window).width();
        if(windowWidth > 991){
    	   $('.equalheight-wrapper').equalheight();
        }
    });

    $(window).resize(function(){
        $('.equalheight-wrapper').css("height", "auto");
        var windowWidth = $(window).width();
        if(windowWidth > 991){
           $('.equalheight-wrapper').equalheight();
        }
    });
});
