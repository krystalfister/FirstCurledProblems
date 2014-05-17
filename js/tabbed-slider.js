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