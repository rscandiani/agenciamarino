
window.onload=function(){

$(document).ready(function () {

    // Get images.
    var images = $('.slider > img');

    // Set starting index.
    var index = images.index($('.active'));
    $('#counter').text((index + 1) + '/' + images.length);

    $('.slider-botao-proximo').on('click', function () {
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active').css('z-index', -1);
            nextImg.addClass('active').css('z-index', 1);

            // Find the index of the image.
            var index = images.index(nextImg);
            $('#counter').text((index + 1) + '/' + images.length);
        }
    });

    $('.slider-botao-anterior').on('click', function () {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active').css('z-index', -1);
            prevImg.addClass('active').css('z-index', 1);

            // Find the index of the image.
            var index = images.index(prevImg);
            $('#counter').text((index + 1) + '/' + images.length);
        }
    });
});

}

        // tell the embed parent frame the height of the content
        if (window.parent && window.parent.parent){
            window.parent.parent.postMessage(["resultsFrame", {
              height: document.body.getBoundingClientRect().height,
              slug: "e615c0r3"
            }], "*")
          }
      
          // always overwrite window.name, in case users try to set it manually
          window.name = "result"
