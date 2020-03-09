$(window).scroll(function () { 
    if ($(window).scrollTop() == 0){
        $('nav').removeClass('redborder');
    }    
    else if($(window).scrollTop()>=250){
        $('nav').addClass('redborder');
    }
    if($(window).scrollTop()>=250){
        $('body').css({background: 'white'});
    }
    else if($(window).scrollTop()<250){
        $('body').css({background: 'black'})
    }
});