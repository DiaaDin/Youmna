$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 20){
            $('.navbar .container').addClass('active')
        }else{
           $('.navbar .container').removeClass('active')
        }
    })

    $('.fa-bars').click(function(){
        $('.fa-bars').toggleClass('fa-times')
        $('nav').toggleClass('toggle')
    })

    $('header nav ul a').click(function(){
        $('.fa-bars').toggleClass('fa-times')
        $('nav').toggleClass('toggle')
    })

})