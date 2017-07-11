/**
 * Created by SYHT on 2017/7/10.
 */
$(function (){
    $(window).on('resize',function (){
            var aa=$(window).width()
        if(aa<960){
            $('body').css({"width":"960"})
        }else{
            $('body').css({"width":"100%"})
        }
    })
})