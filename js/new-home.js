jQuery(document).ready(function(){
    jQuery('.addAssignmemnts').on('click', function(){
        var aaa = $('#createTestBtn').val();
        console.log(aaa)
    });

    $( "#startDate, #endDate" ).datepicker();

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
        $('.table-curriculum-builder table tbody').append('<tr class="child"><td>'+assignmentName+'<\/td><td>'+startDate+'<\/td><td>'+endDate+'<\/td><td>'+diff+'<\/td><td>'+qn+'<\/td><td>'+passRequirements+'%<\/td></tr>');
        jQuery('#add-test').modal('hide');

    });
});

function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function daydiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}