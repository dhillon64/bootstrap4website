$(document).ready(function(){
    $('#carouselExampleIndicators').carousel({ interval: 8000 });
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#carouselExampleIndicators').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else {
            $('#carouselExampleIndicators').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    $("#modelbutton").click(function(){
        $("#staticBackdrop").modal('show');
    });

});