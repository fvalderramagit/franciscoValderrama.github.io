$(document).ready(function(){
    $(window).scroll(function(){
        if($('.navbar').offset().top > 50){
            $('.navbar').addClass('bg-dark')
        }else{
            $('.navbar').removeClass('bg-dark')
        }
    });
});