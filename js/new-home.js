jQuery(document).ready(function(){
    $('.testsaved-msg').html('');
    $( "#startDate, #endDate" ).datepicker();

    $("#add_row").on('click',function(){
        $('.questionnumber-errormsg, .filledall-errormsg').css("display", "none");
        $('#assignmentName, #startDate, #endDate, #passRequirements').val('');
        $('.question-number li').removeClass("active")
    });

    $(".question-number li").on('click',function(){
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
    });

    $('#addAssignmemnts').click(function(){
        var assignmentName = $('#assignmentName').val();
        var startDate = $('#startDate').val();
        var endDate = $('#endDate').val();
        var diff = daydiff(parseDate(startDate), parseDate(endDate));
        var qn = $("input[name='questionCount']:checked"). val();
        var passRequirements = $('#passRequirements').val();
        if (assignmentName.length>0 && startDate.length>0 && endDate.length>0 && passRequirements.length>0 && ($('.question-number li').hasClass("active") == true)) {
            $('.table-curriculum-builder table tbody').append('<tr class="child"><td>'+assignmentName+'<\/td><td>'+startDate+'<\/td><td>'+endDate+'<\/td><td>'+diff+'<\/td><td>'+qn+'<\/td><td>'+passRequirements+'%<\/td></tr>');
            jQuery('#add-test').modal('hide');
        } if (assignmentName.length>0 && startDate.length>0 && endDate.length>0 && passRequirements.length>0 && $('.question-number li').hasClass("active") == false) {
            $('.questionnumber-errormsg').css("display", "block");
        }
        else {
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

    $('#assignmentName, #startDate, #endDate, #passRequirements, #qn').click(function () {
        $('.filledall-errormsg, .questionnumber-errormsg').css("display", "none");
    });
});

function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function daydiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}