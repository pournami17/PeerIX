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
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.practicetest-save').click(function() {
        $(".practicesuccess-alert").html('');
        $(".practicesuccess-alert").css('display','block');
        var assignmentName = $('#assignmentName').val();
        $(".practicesuccess-alert").append("Practice test "+assignmentName+" is saved succesfully");
        window.setTimeout(function () {
          $(".practicesuccess-alert").fadeOut(300)
        }, 3000);
    });

    $("input[name='topicCategories']").change(function(){
        $(this).parents('.categories_wrapper').find('.active').removeClass('active');
        $(this).parent('label').addClass('active');
        if($(this).val() == 'selectedTopics'){
            $('#qstnTopicsList').show();
        }
        else {
            $('#qstnTopicsList').hide();
        }
    });

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