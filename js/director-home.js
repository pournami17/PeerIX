$(document).ready(function(){
    $('.filterable .more').click(function(){
        $(this).parents('.filterable').find('tbody').append('<tr><td>John</td><td>85%</td></tr>');
    });

    $(".turnarrow").click(function(){
        $(".navbar-toggle").addClass("is-active");
    });
});
