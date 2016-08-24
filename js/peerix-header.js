var doing_exam_ajax = false;
jQuery(document).ready(function() {
    // jQuery('#user-feedback').val('');

    var sideslider  = jQuery('[data-toggle=collapse-side]');
    var sel         = sideslider.attr('data-target');
    var sel2        = sideslider.attr('data-target-2');
    sideslider.click(function(event){
        jQuery(sel).toggleClass('in');
        jQuery(sel2).toggleClass('out');
        jQuery('html,body').toggleClass('hide-overflow');
    });

    jQuery('.result-tooltip').tooltip();

    jQuery(document).click(function(e) {
        if (!jQuery(e.target).is('.side-collapse  , .navbar-toggle, .c-hamburger span')) {
            jQuery(".side-collapse").addClass("in");
            jQuery(".side-collapse-container").removeClass("out");
            jQuery(".body-color").hide();
            jQuery(".navbar-toggle").removeClass("is-active");
            jQuery('html,body').removeClass('hide-overflow');
        }
    });

    jQuery(".navbar-toggle").click(function(){
        jQuery(".body-color").toggle();
    });

    jQuery('body').on('click', '.checkBoxMain .btn-default', function()
    //jQuery('.checkBoxMain .btn-default').click(function()
    {
        if(jQuery(this).find('input:checkbox:first:checked').length == 0)
        {
            jQuery(this).find('input:checkbox:first').attr('checked', 'checked');
            var checkbox_checked = true;
        }
        else
        {
            jQuery(this).find('input:checkbox:first').removeAttr('checked');
            var checkbox_checked = false;
        }

        if (jQuery.isFunction(window.doControllerActions))
        {
            //execute it
            doControllerActions(this, checkbox_checked);
        }
    });

    jQuery('body').on('click', '.radioMain .btn-default', function() {
  //  jQuery('.radioMain .btn-default').click(function() {
        if(jQuery(this).find('input:radio:first:checked').length == 0)
        {
            jQuery('.radioMain .btn-default').removeClass('active');
            jQuery('.radioMain').find('input:radio').removeAttr('checked');
            jQuery(this).find('input:radio:first').attr('checked', 'checked');
            var radio_checked = true;
        }

        if (jQuery.isFunction(window.doControllerActions))
        {
            //execute it
            doControllerActions(this, radio_checked);
        }
    });

    function toggleChevron(e) {
        jQuery(e.target)
            .prev('.panel-heading')
            .find("i.indicator")
            .toggleClass('accordionDown accordionRight');
    }
    jQuery('.template-test-details #accordion').on('hidden.bs.collapse', toggleChevron);
    jQuery('.template-test-details #accordion').on('shown.bs.collapse', toggleChevron);

    jQuery('body').on('click', '#flag-remove', function(){
        var flaggedItem = jQuery(this).attr("data-id");
        var qId = jQuery(this).attr("data-qid");
        removeFlag(flaggedItem, qId);
    });

    jQuery('body').on('click', '.peer-point-fav', function(){
        var peerFavoriteItem = jQuery(this).attr("data-id");
        var qId = jQuery(this).attr("data-qid");
        var peerElementId = jQuery(this).attr("id");

        updatePeerFavorite(peerFavoriteItem, 1, peerElementId, qId);
    });

    jQuery('body').on('click', '.peer-review-fav' , function(){
        var peerFavoriteItem = jQuery(this).attr("data-id");
        var qId = jQuery(this).attr("data-qid");
        var peerElementId = jQuery(this).attr("id");

        updatePeerFavorite(peerFavoriteItem, 2, peerElementId, qId);
    });

    jQuery('body').on('click', '#closX', function(){
        if(userSubmissionUrls.fromClass == 'score')
        {
            reviewQuestions(itemCategory);
        }
        else
        {
            getTypeQuestions();
        }
    });

    jQuery('.review-suggested-study-plan').on('click', function(){
        if (jQuery('.review-suggested-study-plan-content').length > 0)
        {
            jQuery('#peerix-modal .modal-content .modal-title').empty().html(jQuery(this).html());
            jQuery('#peerix-modal .modal-content .modal-body').empty().html(jQuery('.review-suggested-study-plan-content').html());
            jQuery('#peerix-modal').modal('show');
        }
    });

    jQuery('.review-questions-no-access').on('click', function(){
        jQuery('#peerix-modal .modal-content .modal-title').empty().html('No Acces');
        jQuery('#peerix-modal .modal-content .modal-body').empty().html('You need to have Peer IX subscription to Review Questions.');
        jQuery('#peerix-modal').modal('show');
    });

    jQuery('body').on('click', '#daily-pulse-settings' , function(){
        showDailyPulsePopup();
    });
});

jQuery(document).on("click","#submit-feedback",function(e){
    var feedback = jQuery('#user-feedback').val();
    var feedbackItemId = jQuery(this).attr('data-id');

    submitFeedback(feedbackItemId, feedback);

});

jQuery(document).on("click",".read-link",function(e){
    jQuery("#correct-rationale").removeClass('read-full');
    jQuery(".read-link").hide();
});

jQuery(document).on("click",".resentItem",function(e){
    jQuery(".recentItem").animate({
        right: '0'
    });
    jQuery("body").css('overflow','hidden');
});

jQuery(document).on("click","#closX",function(e){
    jQuery(".recentItem").animate({
        right: '-100%'
    });
    jQuery(".recentItem").html('');
jQuery("body").css('overflow','auto');

});

var active = true;
jQuery(document).on("click",".closeall",function(e){
    active = true;
    jQuery('#accordion .panel-collapse, #accordion1 .panel-collapse').collapse('hide');
    jQuery('.panel-title').attr('data-toggle', 'collapse');
    jQuery(".openall").removeClass('active');
    jQuery(".closeall").addClass('active');
});

jQuery(document).on("click",".openall",function(e){
    active = false;
    jQuery('#accordion .panel-collapse, #accordion1 .panel-collapse').collapse('show');
    jQuery('.panel-title').attr('data-toggle', '');
    jQuery(".openall").addClass('active');
    jQuery(".closeall").removeClass('active');
});

jQuery(document).on('show.bs.collapse','#accordion' , function () {
    if (active) jQuery('#accordion .in').collapse('hide');
});

jQuery(document).on('show.bs.collapse','#accordion1' , function () {
    if (active) jQuery('#accordion1 .in').collapse('hide');
});

function LabelChange(flag, testName, categoryName)
{
    if(flag == 1){
        if(categoryName)
            $('#header2').html('Review Questions - '+categoryName);
        else
            $('#header2').html('Review Questions');
        $('#breadcrums li.active a').html('Review Questions');
    }
    else{
        $('#header2').html(testName+' Results');
        $('#breadcrums li.active a').html('Scores by category');
    }
}

function submitFeedback(feedbackItemId, feedback) {

    jQuery('.feedback-submit').hide();
    if(!feedback)
    {
        jQuery('.feedback-submit').removeClass('feedback-success');
        jQuery('.feedback-submit').addClass('feedback-error');
        jQuery('.feedback-submit').html('Feedback Required');
        jQuery('.feedback-submit').show();
    }
    else
    {
        jQuery('#peer-loader').css('z-index', 9999999);
        jQuery('#peer-loader').show();
        var input_data = [];
        input_data.push({name: 'feedbackItemId', value: feedbackItemId });
        input_data.push({name: 'feedback', value: feedback });
        jQuery.ajax({
                type    : "post",
                data    : input_data,
                dataType: 'html',
                url     : userSubmissionUrls.feedbackUrl,
                success: function (response) {
                    if(response == 1)
                    {
                        jQuery('.feedback-submit').removeClass('feedback-error');
                        jQuery('.feedback-submit').addClass('feedback-success');
                        jQuery('.feedback-submit').html('Feedback Submitted Successfully');
                        jQuery('.feedback-submit').show();
                    }
                    else
                    {
                        jQuery('.feedback-submit').removeClass('feedback-success');
                        jQuery('.feedback-submit').addClass('feedback-error');
                        jQuery('.feedback-submit').html('Feedback Submission Failed');
                        jQuery('.feedback-submit').show();
                    }
                    jQuery('#peer-loader').fadeOut( "slow", function() {
                        // jQuery('#user-feedback').val('');
                    });
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);
                }
        });
    }
}

function removeFlag(flaggedItem, qId) {
    jQuery('#peer-loader').css('z-index', 9999999);
    jQuery('#peer-loader').show();
    var input_data = [];
    input_data.push({name: 'flaggedItem', value: flaggedItem });

    jQuery.ajax({
        type    : "post",
        data    : input_data,
        dataType: 'html',
        url     : userSubmissionUrls.removeFlagUrl,
        success: function (response) {
            if(userSubmissionUrls.fromClass == 'score')
            {
                reviewQuestions(itemCategory);
            }
            else
            {
                getTypeQuestions();
            }
            if(userSubmissionUrls.userFlagged)
            {
                getTypeQuestions();
            }
            jQuery('.quetionLi #flagged_' + qId).remove();
            jQuery('#flag-remove').remove();
            jQuery('#closX').trigger('click');
            jQuery('#peer-loader').fadeOut( "slow", function() {
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
         }
    });
}

function updatePeerFavorite(peerFavoriteItem, action, peerElementId, qId)
{
    jQuery('#peer-loader').css('z-index', 9999999);
    jQuery('#peer-loader').show();
    var input_data = [];
    input_data.push({name: 'peerFavoriteItem', value: peerFavoriteItem });
    input_data.push({name: 'action', value: action });
    jQuery.ajax({
            type    : "post",
            data    : input_data,
            dataType: 'html',
            url     : userSubmissionUrls.updatePeerFavoriteUrl,
            success: function (response) {
                if(response)
                {
                    jQuery('#'+peerElementId).removeClass('plus');
                    jQuery('#'+peerElementId).addClass('minus');
                }
                else
                {
                    jQuery('#'+peerElementId).removeClass('minus');
                    jQuery('#'+peerElementId).addClass('plus');
                }
                jQuery('#peer-loader').fadeOut( "slow", function() {
                });
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
}

function getTypeQuestions()
{
    jQuery('#peer-loader').css('z-index', 9999999);
    jQuery('#peer-loader').show();
    jQuery.ajax({
        type    : "post",
        dataType: 'html',
        url     : userQuestionUrls.typeQuestionsUrl,
        success: function (response) {
            jQuery('#type-questions').html(response);
          //reintialize lytebox
            initLytebox();
            jQuery('#peer-loader').fadeOut( "slow", function() {
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
         }
    });
}

function showDailyPulsePopup() {
    jQuery('#peer-loader').css('z-index', 9999999);
    jQuery('#peer-loader').show();
    jQuery.ajax({
        type    : "post",
        dataType: 'html',
        url     : userQuestionUrls.dailyPulseUrl,
        success: function (response) {
            jQuery('#peer-loader').hide();
            jQuery('#daily-pulse-content').html(response);
            jQuery('#pulse_notification_days').selectpicker();
            jQuery('#pulse_email_type').selectpicker();
            jQuery('#daily-pulse-modal').modal('show');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
         }
    });
}