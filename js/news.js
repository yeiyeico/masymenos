jQuery(window).resize(function(){
    if ( jQuery(window).width() < 960 )
    {
        jQuery('#move-div').insertBefore('#move-div-bottom');
        jQuery('#move-div-2').insertBefore('#move-div-bottom-2');

    }
    if ( jQuery(window).width() > 960 )
    {
        jQuery('#move-div-bottom').insertBefore('#move-div');
        jQuery('#move-div-bottom-2').insertBefore('#move-div-2');
    }
    jQuery(window).height(); // New height
    jQuery(window).width(); // New width
});