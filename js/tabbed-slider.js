/* 4-Tab Toggle */

/* Content Slide-in Functionality */

$(document).ready(function () {
    $('div.two').hide();
    $('div.three').hide();
    $('div.four').hide();
    
    $('.one').click(function () {
        $('div.two').hide();
        $('div.three').hide();
        $('div.four').hide();
        $('div.one').slideToggle();
    });
    $('.two').click(function () {
            $('div.one').hide();
            $('div.three').hide();
            $('div.four').hide();
        $('div.two').slideToggle();
    });
    $('.three').click(function () {
        $('div.one').hide();
        $('div.two').hide();
        $('div.four').hide();
        $('div.three').slideToggle();
    });
    $('.four').click(function () {
        $('div.one').hide();
        $('div.two').hide();
        $('div.three').hide();
        $('div.four').slideToggle();
    });
});

/* Hair Type Selection Boxes */

$(document).ready(function () {
    $('div.curlType').hide();
    
    $('.one').click(function () {
        $('div.two').hide();
        $('div.three').hide();
        $('div.four').hide();
        $('div.one').slideToggle();
    });
    $('.two').click(function () {
            $('div.one').hide();
            $('div.three').hide();
            $('div.four').hide();
        $('div.two').slideToggle();
    });
    $('.three').click(function () {
        $('div.one').hide();
        $('div.two').hide();
        $('div.four').hide();
        $('div.three').slideToggle();
    });
    $('.four').click(function () {
        $('div.one').hide();
        $('div.two').hide();
        $('div.three').hide();
        $('div.four').slideToggle();
    });
});

/* Highlight Tab When Selected */

if ($('.tabs-holder').length) {

    var $tabsHolder = $('.tabs-holder');

    $tabsHolder.each(function(i, val) {

        var $tabsNav = $('.tabs-nav', val),
            tabsNavLis = $tabsNav.children('li'),
        $tabsContainer = $('.tabs-container', val);

        $tabsNav.each(function() {
            $(this).next().children('.tab-content').first().stop(true, true).show();
            $(this).children('li').first().addClass('active').stop(true, true).show();
        });

        $tabsNav.on('click', 'a', function(e) {
            var $this = $(this).parent('li'),
                $index = $this.index();
            $this.siblings().removeClass('active').end().addClass('active');
            $this.parent().next().children('.tab-content').stop(true, true).hide().eq($index).stop(true, true).fadeIn(250);
            e.preventDefault();

        });

    });
}