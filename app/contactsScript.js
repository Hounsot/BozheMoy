$(document).ready(function(){
    $('.button').click(function(){
        $('.quiz').toggleClass('quiz_opened');
        $('.intro').toggleClass('quiz_blur');
        $('header').toggleClass('quiz_blur')
    })
})