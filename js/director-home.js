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

    $('.practicetest-save').click(function(){
        var assignmentName = $('#assignmentName').val();
        var startDate = $('#startDate').val();
        var endDate = $('#endDate').val();
        var diff = daydiff(parseDate(startDate), parseDate(endDate));
        var qn = $("input[name='questionCount']:checked"). val();
        var passRequirements = $('#passRequirements').val();
        if (assignmentName.length>0 && startDate.length>0 && endDate.length>0 && passRequirements.length>0 && qn.length>0) {
            var assignmentName = $('#assignmentName').val();
        } else if (assignmentName.length>0 || startDate.length>0 || endDate.length>0 || passRequirements.length>0 || qn.length>0) {
            $('.filledall-errormsg').css("display", "block");
        }
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