$(document).ready(function(){
    var content     =   'Таким образом, прибавочная стоимость расщепляется на различные части. Различные её доли попадают в руки лиц различных категорий и приобретают различные, самостоятельные по отношению друг к другу формы, каковы: прибыль, процент, торговая прибыль, земельная рента и т. д. Эти превращённые формы прибавочной стоимости могут быть рассмотрены лишь в третьей книге.'+
                        'Итак, с одной стороны, мы предполагаем здесь, что капиталист, производящий товары, продаёт их по их стоимости, причём мы не будем рассматривать здесь его обратного возвращения на товарный рынок: ни тех новых форм, которые принимает капитал в сфере обращения, ни скрытых в них конкретных условий воспроизводства. С другой стороны, мы предполагаем, что капиталистический производитель является собственником всей прибавочной стоимости или, если угодно, представителем всех участников в дележе её. Таким образом, сначала мы рассмотрим накопление абстрактно, т. е. просто как момент непосредственного процесса производства.'+
                        'Впрочем, поскольку накопление совершается, постольку очевидно, что капиталисту удаётся продать произведённый товар и превратить вырученные от этой продажи деньги обратно в капитал. Далее: распадение прибавочной стоимости на различные доли ничуть не изменяет её природы и тех необходимых условий, при которых она становится элементом накопления. В какой бы пропорции ни распадалась прибавочная стоимость на часть, удерживаемую самим капиталистическим производителем, и часть, которую он уступает другим, во всяком случае в первую очередь прибавочная стоимость присваивается её капиталистическим производителем. Следовательно, то, что мы предполагаем при нашем изображении процесса накопления, то происходит и в действительности. С другой стороны, расщепление прибавочной стоимости и посредствующее движение обращения затемняют простую основную форму процесса накопления. Поэтому анализ последнего в его чистом виде требует предварительного отвлечения от всех явлений, скрывающих внутреннюю игру его механизма.',
        showTxt     =   'показать',
        hideTxt     =   'скрыть',
        popupTextEl =   $('.js-get-popup-text');
        btn1        =   $('.js-show-first-popup'),    //table +
        btn2        =   $('.js-show-second-popup'),   //ib +
        btn3        =   $('.js-show-third-popup'),    //js mt ml +
        btn4        =   $('.js-show-fourth-popup'),    //transform
        btn5        =   $('.js-show-fifth-popup'),    //flexbox +
        btn6        =   $('.js-show-sixth-popup'),   //dialog +
        popupCntr   =   $('.js-get-popup-holder'),
        popupCntnt  =   '';
    
    btn1.click(function(){
        var self        = $(this),
            btnText     = $(this).find('.js-get-btn-text'),
            popup1      = null,
            popup1Close = null;
        

        popupCntnt =    '<div class="popup--first pos-abs js-get-popup1">'+
                            '<div class="popup--first__body js-get-popup1-body">'+
                                '<div class="popup--first__body__bg pos-abs js-get-close"></div>'+
                                '<div class="popup--first__body__text pos-rel js-get-popup-text"></div>'+
                            '</div>'+
                            '<button class="popup__close-btn js-get-close"></button>'+
                        '</div>';

        self.toggleClass('is-opened');

        self.hasClass('is-opened') ? btnText.text(hideTxt) : btnText.text(showTxt);

        popupCntr.html(popupCntnt).find('.js-get-popup-text').text(content);

        popup1 = $('.js-get-popup1');
        
        popup1Close = $(popup1).find('.js-get-close');
        
        popup1Close.click(function() {
            popup1.remove();
            self.removeClass('is-opened');
            btnText.text(showTxt);
        });
    });

    btn2.click(function(){
        var self        = $(this),
            btnText     = $(this).find('.js-get-btn-text');
            popup2      = null,
            popup2Close = null;
        

        popupCntnt =    '<div class="popup--second pos-fix js-get-popup2">'+
                            '<div class="popup--second__bg pos-fix js-get-close"></div>'+
                            '<div class="popup--second__body pos-rel">'+
                                '<div class="popup--second__body__text js-get-popup-text"></div>'+
                            '</div>'+
                            '<button class="popup__close-btn js-get-close"></button>'+
                        '</div>';

        self.toggleClass('is-opened');

        self.hasClass('is-opened') ? btnText.text(hideTxt) : btnText.text(showTxt);

        popupCntr.html(popupCntnt).find('.js-get-popup-text').text(content);

        popup2 = $('.js-get-popup2');
        
        popup2Close = popup2.find('.js-get-close');
        
        popup2Close.click(function() {
            popup2.remove();
            self.removeClass('is-opened');
            btnText.text(showTxt);
        });
    });  

    btn3.click(function(){
        var self        = $(this),
            btnText     = $(this).find('.js-get-btn-text'),
            popup3      = null,
            popup3Close = null,
            popup3Body  = null,
            popup3W     = null,
            popup3H     = null;
        

        popupCntnt =    '<div class="popup--third pos-abs js-get-popup3">'+
                            '<div class="popup--third__bg pos-abs js-get-close"></div>'+
                            '<div class="popup--third__body pos-abs js-get-popup3-body">'+
                                '<div class="popup--third__body__text js-get-popup-text"></div>'+
                            '</div>'+
                            '<button class="popup__close-btn js-get-close"></button>'+
                        '</div>';

        self.toggleClass('is-opened');

        self.hasClass('is-opened') ? btnText.text(hideTxt) : btnText.text(showTxt);

        popupCntr.html(popupCntnt).find('.js-get-popup-text').text(content);

        popup3 = $('.js-get-popup3');
        
        popup3Close = popup3.find('.js-get-close');
        
        popup3Close.click(function() {
            popup3.remove();
            self.removeClass('is-opened');
            btnText.text(showTxt);
        });
        
        popup3Body = popup3.find('.js-get-popup3-body');

        resizeFunc();

        $(window).resize(resizeFunc);
    });

    function resizeFunc() {

        var popup3Body  = $('.js-get-popup3-body'),
            popup3      = $('.js-get-popup3');

        
            popup3Body.width(popup3.width() * 0.8);
        

        popup3Body.css({
            width: popup3.width() * 0.8,
            marginLeft: -(popup3Body.width())/2,
            marginTop: -(popup3Body.height())/2
        });
    }

    btn4.click(function(){
        var self        = $(this),
            btnText     = $(this).find('.js-get-btn-text');
            popup4      = null,
            popup4Close = null;
        

        popupCntnt =    '<div class="popup--fourth pos-abs js-get-popup4">'+
                            '<div class="popup--fourth__bg pos-abs js-get-close"></div>'+
                            '<div class="popup--fourth__body pos-abs">'+
                                '<div class="popup--fourth__body__text js-get-popup-text"></div>'+
                            '</div>'+
                            '<button class="popup__close-btn js-get-close"></button>'+
                        '</div>';

        self.toggleClass('is-opened');

        self.hasClass('is-opened') ? btnText.text(hideTxt) : btnText.text(showTxt);

        popupCntr.html(popupCntnt).find('.js-get-popup-text').text(content);

        popup4 = $('.js-get-popup4');
        
        popup4Close = popup4.find('.js-get-close');
        
        popup4Close.click(function() {
            popup4.remove();
            self.removeClass('is-opened');
            btnText.text(showTxt);
        });
    });   

    btn5.click(function(){
        var self        = $(this),
            btnText     = $(this).find('.js-get-btn-text');
            popup5      = null,
            popup5Close = null;
        

        popupCntnt =    '<div class="popup--fifth pos-abs js-get-popup5">'+
                            '<div class="popup--fifth__bg pos-abs js-get-close"></div>'+
                            '<div class="popup--fifth__body pos-rel">'+
                                '<div class="popup--fifth__body__text js-get-popup-text"></div>'+
                            '</div>'+
                            '<button class="popup__close-btn js-get-close"></button>'+
                        '</div>';

        self.toggleClass('is-opened');

        self.hasClass('is-opened') ? btnText.text(hideTxt) : btnText.text(showTxt);

        popupCntr.html(popupCntnt).find('.js-get-popup-text').text(content);

        popup5 = $('.js-get-popup5');
        
        popup5Close = popup5.find('.js-get-close');
        
        popup5Close.click(function() {
            popup5.remove();
            self.removeClass('is-opened');
            btnText.text(showTxt);
        });
    });

    btn6.click(function(){
        var self        = $(this),
            btnText     = $(this).find('.js-get-btn-text');
            popup6      = null,
            popup6Close = null;
        

        popupCntnt =    '<dialog id="js-get-popup6" class="popup--sixth pos-fix">'+
                            '<div class="popup--sixth__body">'+
                                '<div class="popup--sixth__body__text js-get-popup-text"></div>'+
                            '</div>'+
                            '<button class="popup__close-btn js-get-close"></button>'+
                        '</dialog>';

        self.toggleClass('is-opened');

        self.hasClass('is-opened') ? btnText.text(hideTxt) : btnText.text(showTxt);

        popupCntr.html(popupCntnt).find('.js-get-popup-text').text(content);

        popup6 = document.getElementById('js-get-popup6');
        popup6.showModal();
        popup6Close = $(popup6).find('.js-get-close');
        
        popup6Close.click(function() {
            popup6.close();
            self.removeClass('is-opened');
            btnText.text(showTxt);
        });
    });
});