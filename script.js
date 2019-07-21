$(document).ready(function() {
    
    //load language
    var lang = localStorage.getItem('lang') || 'pt-br'

    $('.content div').css('display', 'none')

    $('.content .home').css('display', 'block')

    $('.content div > div').css('display', 'none')
    $('.'+lang).css('display', 'block')

    $('#flag-'+lang).css({
        'box-shadow': '0 0px 4px #fff',
        'border-radius': '3px'
    })

    //menu - words
    var menu = {
        home: {
            'pt-br': 'Home',
            'en-us': 'Home'
        },
        about: {
            'pt-br': 'Currículo',
            'en-us': 'Resume'
        },
        contact: {
            'pt-br': 'Contato',
            'en-us': 'Contact'
        }
    }

    //menu - show
    $('#home').text(menu.home[""+lang+""])
    $('#about').text(menu.about[""+lang+""])
    $('#contact').text(menu.contact[""+lang+""])
    
    

    //change language
    $('.flag').click(function(){
        if ( $(this).attr('id') == 'flag-pt-br') {
            localStorage.setItem('lang', 'pt-br');
            location.reload();
        } else if ( $(this).attr('id') == 'flag-en-us') {
            localStorage.setItem('lang', 'en-us');
            location.reload();
        }
    })

    //Menu control
    $('.menu > .menu-item').click(function(){
        $('.content > div').css('display', 'none')
        $('.'+$(this).attr('id')).css('display', 'block')
    })


});