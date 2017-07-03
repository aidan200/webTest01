/**
 * Created by Administrator on 2017/7/3.
 */
$(function (){
    var width=$(window).width();
    var height=$(window).height();
    $('.zp_gsxq_hy em').on('click',function (){
        $('#zp_gsxq_bd_tck').css({
            "display":"block",
            "width":width,
            "height":height
        });
        $("#zp_gsxq_bd_tck_cont1").css({
            "display":"block"
        });
        $('#zp_gsxq_bd_tck_cont1').animate({
            "width":"700",
            "height":"450"
        })
    });
    $('.zp_gsxq_bd_tck_bottom button').on('click',function (){
        $('#zp_gsxq_bd_tck').css({
            "display":"none"
        });
        $(this).parent().parent().css({
            "display":"none",
            "width":"0",
            "height":"0"
        })

    })
//   省市联动开始
    $(".zp_gsxq_dz em").on('click',function (){
        $('#zp_gsxq_bd_tck').css({
            "display":"block",
            "width":width,
            "height":height
        });
        $("#zp_gsxq_bd_tck_cont2").css({
            "display":"block"
        });
        $('#zp_gsxq_bd_tck_cont2').animate({
            "width":"700",
            "height":"450"
        })
    })
});