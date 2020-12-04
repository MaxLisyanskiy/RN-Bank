document.addEventListener("DOMContentLoaded", function() {

    //Воспроизведение музыки вначале и по клику
    var track = document.querySelector('#myaudio');
        track.volume = 0.1;
      
    $('.main-top__sound-icon').on('click', function(){
    var track = document.querySelector('#myaudio');
        if (track.paused) {
        track.play();
        $(this).attr('src', 'images/dest/SoundOn.png');
        } else {
        track.pause();
        $(this).attr('src', 'images/dest/SoundOff.png');
        }
    });

    //Появление main-top
    setTimeout(function() {
        document.getElementById('main-top').style.opacity = '1';
    }, 1800);


    //Появление и исчезновение main-middle
    $('#main-middle').delay(1200).fadeIn();

    setTimeout(function() {
        $('#main-middle').addClass('fadeOutDown').fadeOut();
    }, 14000);

    //Появление main-secondMiddle__text
    setTimeout(function() {
        $('.main-secondMiddle__text').fadeIn().addClass('fadeInDown');
    }, 15000);

    //Появление btn-orange
    setTimeout(function() {
        $('.btn-orange').css('display', 'block').addClass('fadeInUp');
    }, 16000);

    //Появление btn
    function windowSize(){
        if ($(window).width() >= '500'){
            setTimeout(function() {
                $('#btn').css('display', 'block').addClass('fadeInUp');
            }, 15500);
        } else {
            $('#btn').css('display', 'none');
        }
    }

    $(window).on('load resize',windowSize);
});


