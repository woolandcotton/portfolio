$(document).ready(function() {

    $(".scroll-button").on("click", function(e){
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1200);
        return false;
    });

});