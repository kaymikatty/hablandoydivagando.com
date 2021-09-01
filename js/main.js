$(document).ready(function(){

var banner = {
    padre: $( '#banner'),
    numeroSlider: $ ('#banner').children('.slide').length,
    posicion: 1
}

var info = {
    padre: $( '#info'),
    numeroSlider: $ ('#info').children('.slide').length,
    posicion: 1
}

banner.padre.children('.slide').first().css({
    'left':0
});

info.padre.children('.slide').first().css({
    'left':0
});

var altobanner = function(){
    var alto = banner.padre.children('.active').outerHeight();

    banner.padre.animate({
        'height': alto + 'px'
    });

    //console.log(alto);
}

var altoinfo = function(){
    var alto = info.padre.children('.active').outerHeight();

    info.padre.animate({
        'height': alto + 'px'
    });

    //console.log(alto);
}

var altocontenedor = function(){
    var altoventana = $(window).height();

    if (altoventana <= $('#contenedor').outerHeight() +200){
        $('#contenedor').css({
            'height': ''
        });
    }
    
    else{
        $('#contenedor').css({
            'height': altoventana + 'px'
            });
    }
    
}

altobanner();
altoinfo();
altocontenedor();

$(window).resize(function(){
    altobanner();
    altoinfo();
    altocontenedor();
});

$('#info').children('slide').each(function(){
    $('#botones').append('<span>');
});
$('#botones').children('span').first().addClass('active');


//Banner_Info
//boton siguiente

$('#info-next').on('click', function(e) {
    e.preventDefault();

    if(info.posicion <info.numeroSlider){


        info.padre.children().not('.active').css({
            'left': '100%'
        });

    $('#info .active').removeClass('active').next().addClass('active').animate({
        'left': '0'
    });

    $('#info .active').prev().animate({
        'left': '-100%'
    });

    $('#botones').children('.active').removeClass('active').next().addClass('active');

    info.posicion = info.posicion + 1;

    }

    else{

        $('#info .active').animate({
            'left': '-100%'
        });

        info.padre.children().not('.active').css({
            'left': '100%'
        });

        $('#info .active').removeClass('active');
        info.padre.children('.slide').first().addClass('active').animate({
            'left': 0
        });
        $('#botones').children('.active').removeClass('active');
        $('#botones').children('span').first().addClass('active');
        info.posicion = 1;
    }

    altoinfo();
});


//boton anterior

$('#info-prev').on('click',function(e){
    e.preventDefault();

    if(info.posicion > 1){

    info.padre.children().not('.active').css({
        'left': '-100%'
    });

    $('#info .active').animate({
        'left': '100%'
    });

    $('#info .active').removeClass('active').prev().addClass('active').animate({
        'left': 0
    });

    $('#botones').children('.active').removeClass('active').prev().addClass('active');

    info.posicion = info.posicion -1 
}

    else{
        info.padre.children().not('.active').css({
            'left': '-100%'
        });

        $('#info .active').animate({
            'left': '100%'
        });

        $('#info .active').removeClass('active');
        info.padre.children().last().addClass('active').animate({
            'left': 0
        });

        $('#botones').children('.active').removeClass('active');
        $('#botones').children('span').last().addClass('active');
        
        info.posicion= info.numeroSlider;
    }

    altoinfo();
});


});


