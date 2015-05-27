$(document).ready(function () {
    console.log("ready");

    var overlay = {
        newDiv : $('<div>', {class: 'overlay'})
    }

    var overlay_gallery ={
        newDiv : $('<div>', {class: 'overlay-gallery'})
    }


    $(".item-c-1").on ('mouseenter', function () {
        $(this).children('h4').addClass('blue');
        $(this).addClass('gray-bg');
        overlay.newDiv.prependTo('figure.img-c-1');
    });

    $(".item-c-1").on( 'mouseleave', function () {
        $(this).children('h4').removeClass('blue');
        $(this).removeClass('gray-bg');
        overlay.newDiv.remove();
    });

    $(".item-c-2").on ('mouseenter', function () {
        $(this).children('h4').addClass('blue');
        $(this).addClass('gray-bg');
        overlay.newDiv.prependTo('figure.img-c-2');
    });

    $(".item-c-2").on( 'mouseleave', function () {
        $(this).children('h4').removeClass('blue');
        $(this).removeClass('gray-bg');
        overlay.newDiv.remove();
    });

    $(".item-c-3").on ('mouseenter', function () {
        $(this).children('h4').addClass('blue');
        $(this).addClass('gray-bg');
        overlay.newDiv.prependTo('figure.img-c-3');
    });

    $(".item-c-3").on( 'mouseleave', function () {
        $(this).children('h4').removeClass('blue');
        $(this).removeClass('gray-bg');
        overlay.newDiv.remove();
    });

    $(".item-c-4").on ('mouseenter', function () {
        $(this).children('h4').addClass('blue');
        $(this).addClass('gray-bg');
        overlay.newDiv.prependTo('figure.img-c-4');
    });

    $(".item-c-4").on( 'mouseleave', function () {
        $(this).children('h4').removeClass('blue');
        $(this).removeClass('gray-bg');
        overlay.newDiv.remove();
    });

    // $(".img-item" )
    // .on( "mouseenter", function() {
    //     overlay.newDiv.prependTo(this);
    // })
    // .on( "mouseleave", function() {
    //     overlay.newDiv.remove();
    // });


    $("li.item-gallery" )
    .on( "mouseenter", function() {
      overlay_gallery.newDiv.prependTo(this);
  })
    .on( "mouseleave", function() {
      overlay_gallery.newDiv.remove();
  });

});
