$(document).ready(function(){
    var btn1      = $('.js-show-first-popup'),
          btn2 = $('.js-show-second-popup'),
          popup1 = $('.js-get-popup1'),
          popup2 = $('.js-get-popup2');
    
    btn1.click(function(){
        var self = $(this),
            btnText = $(this).find('.js-get-btn-text');
        popup1.toggleClass('hidden');
        self.toggleClass('is-opened');
        self.hasClass('is-opened') ? btnText.text('скрыть') : btnText.text('показать');
        popup1.click(function(){
            self.click();
        });
        
    });
    
    btn2.click(function(){
        var self = $(this),
            btnText = $(this).find('.js-get-btn-text');
        popup2.toggleClass('hidden');
        self.toggleClass('is-opened');
        self.hasClass('is-opened') ? btnText.text('скрыть') : btnText.text('показать');
        popup2.click(function(){
            self.click();
        });
    });
    
    
});