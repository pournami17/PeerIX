$(document).ready(function(){
    $('.table-engagement-level .more').click(function(){
        $(this).parents('.filterable').find('tbody').append('<tr><td><a class="myprogress-link" href="../PeerIX/progress.html">Juan</a></td><td>10</td></tr>');
    });

    $('.table-performance-ranking .more').click(function(){
        $(this).parents('.filterable').find('tbody').append('<tr><td><a class="myprogress-link" href="../PeerIX/progress.html">John</a></td><td>85%</td></tr>');
    });

    $('.table-performance-category .more').click(function(){
        $(this).parents('.filterable').find('tbody').append('<tr><td>Signs, Symptoms, and Presentation</td><td>85%</td></tr>');
    });

    $('.table-peer-completion .more').click(function(){
        $(this).parents('.filterable').find('tbody').append('<tr><td><a class="myprogress-link" href="../PeerIX/progress.html">Suzane</a></td><td>75%</td></tr>');
    });

    $(".turnarrow").on('click',function(){
        console.log("clicked");
        $(".navbar-toggle").addClass("is-active");
    });

    $(".btn-dashboard-menu").click(function(){
        $('.dashboard-menu-options .list-group').slideToggle();
    });

    $(".question-number li").on('click',function(){
        console.log("hi");
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
    });

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
