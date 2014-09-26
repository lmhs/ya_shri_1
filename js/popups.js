$(document).ready(function(){
    var content     =   'Таким образом, прибавочная стоимость расщепляется на различные части. Различные её доли попадают в руки лиц различных категорий и приобретают различные, самостоятельные по отношению друг к другу формы, каковы: прибыль, процент, торговая прибыль, земельная рента и т. д. Эти превращённые формы прибавочной стоимости могут быть рассмотрены лишь в третьей книге.'+
                        'Итак, с одной стороны, мы предполагаем здесь, что капиталист, производящий товары, продаёт их по их стоимости, причём мы не будем рассматривать здесь его обратного возвращения на товарный рынок: ни тех новых форм, которые принимает капитал в сфере обращения, ни скрытых в них конкретных условий воспроизводства. С другой стороны, мы предполагаем, что капиталистический производитель является собственником всей прибавочной стоимости или, если угодно, представителем всех участников в дележе её. Таким образом, сначала мы рассмотрим накопление абстрактно, т. е. просто как момент непосредственного процесса производства.'+
                        'Впрочем, поскольку накопление совершается, постольку очевидно, что капиталисту удаётся продать произведённый товар и превратить вырученные от этой продажи деньги обратно в капитал. Далее: распадение прибавочной стоимости на различные доли ничуть не изменяет её природы и тех необходимых условий, при которых она становится элементом накопления. В какой бы пропорции ни распадалась прибавочная стоимость на часть, удерживаемую самим капиталистическим производителем, и часть, которую он уступает другим, во всяком случае в первую очередь прибавочная стоимость присваивается её капиталистическим производителем. Следовательно, то, что мы предполагаем при нашем изображении процесса накопления, то происходит и в действительности. С другой стороны, расщепление прибавочной стоимости и посредствующее движение обращения затемняют простую основную форму процесса накопления. Поэтому анализ последнего в его чистом виде требует предварительного отвлечения от всех явлений, скрывающих внутреннюю игру его механизма.',
        showTxt     =   'показать',
        hideTxt     =   'скрыть',
        popupTextEl = $('.js-get-popup-text');
        btn1        = $('.js-show-first-popup'),
        btn2        = $('.js-show-second-popup'),
        btn3        = $('.js-show-third-popup'),
        popup2      = $('.js-get-popup2'),
        popup3      = $('.js-get-popup3'),
        popupCntr   = $('.js-get-popup-holder'),
        popupCntnt  = '';
    
    btn1.click(function(){
        var self        = $(this),
            btnText     = $(this).find('.js-get-btn-text')
            popup1      = null;
        

        popupCntnt =    '<div class="popup--first pos-abs js-get-popup1">'+
                            '<div class="popup--first__body js-get-popup1-body">'+
                                '<div class="popup--first__body__text js-get-popup-text"></div>'+
                            '</div>'+
                        '</div>';         

        if (self.hasClass('is-opened')) {
            self.removeClass('is-opened');
            btnText.text(showTxt);
            
            popup1 = $('.js-get-popup1');  

            if (popup1) {
                popup1.remove();
            }
        } else {
            popupCntr.html(popupCntnt).find('.js-get-popup-text').text(content);
            self.addClass('is-opened');
            btnText.text(hideTxt);

            popup1 = $('.js-get-popup1');  
            
            popup1.click(function(){
                self.click();
            });
        }
    });
    
    btn2.click(function(){
        var self        = $(this),
            btnText     = $(this).find('.js-get-btn-text');
            popup2      = null;
        

        popupCntnt =    '<div class="popup--second pos-abs js-get-popup2">'+
                            '<div class="popup--second__body">'+
                                '<div class="popup--second__body__text js-get-popup-text"></div>'+
                            '</div>'+
                        '</div>';         

        if (self.hasClass('is-opened')) {
            self.removeClass('is-opened');
            btnText.text(showTxt);
            
            popup2 = $('.js-get-popup2');  

            if (popup2) {
                popup2.remove();
            }
        } else {
            popupCntr.html(popupCntnt).find('.js-get-popup-text').text(content);
            self.addClass('is-opened');
            btnText.text(hideTxt);

            popup2 = $('.js-get-popup2');  
            
            popup2.click(function(){
                self.click();
            });
        }
    });

    btn3.click(function(){
        var self        = $(this),
            btnText     = $(this).find('.js-get-btn-text');
            popup3      = null,
            popup3Body  = null;
        

        popupCntnt =    '<div class="popup--third pos-abs js-get-popup3">'+
                            '<div class="popup--third__body pos-abs js-get-popup3-body">'+
                                '<div class="popup--third__body__text js-get-popup-text"></div>'+
                            '</div>'+
                        '</div>';         

        if (self.hasClass('is-opened')) {
            self.removeClass('is-opened');
            btnText.text(showTxt);
            
            popup3 = $('.js-get-popup3');  

            if (popup3) {
                popup3.remove();
            }
        } else {
            popupCntr.html(popupCntnt).find('.js-get-popup-text').text(content);
            self.addClass('is-opened');
            btnText.text(hideTxt);

            popup3 = $('.js-get-popup3');

            popup3Body = popup3.find('.js-get-popup3-body');

            popup3Body.css({
                marginTop: -popup3Body.height()/2,
                marginLeft: -popup3Body.width()/2
            });

            
            popup3.click(function(){
                self.click();
            });
        }
    });
    
    
});