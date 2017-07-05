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
    $('.zp_gsxq_bd_tck_middle a').on("click",function (){//选择行业
        $('.zp_gsxq_hy > input').val($(this).html())
        $('#zp_gsxq_bd_tck').css({
            "display":"none"
        });
        $(this).parent().parent().parent().parent().css({
            "display":"none",
            "width":"0",
            "height":"0"
        })
    });
    $('.zp_gsxq_bd_tck_bottom button').on('click',function (){//关闭按钮
        $('#zp_gsxq_bd_tck').css({
            "display":"none"
        });
        $(this).parent().parent().css({
            "display":"none",
            "width":"0",
            "height":"0"
        })

    });
    $('.gb').on("click",function (){//关闭按钮
        $('#zp_gsxq_bd_tck').css({
            "display":"none"
        });
        $(this).parent().parent().css({
            "display":"none",
            "width":"0",
            "height":"0"
        })
    });

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
            "height":"300"
        })
    });
    $('.zp_gsxq_bd_tck_bottom > a').on("click",function (){
        var a=$('.zp_gsxq_bd_tck_cont2_cont select').eq(0).find("option:selected").text();
        var b=$('.zp_gsxq_bd_tck_cont2_cont select').eq(1).find("option:selected").text();
        $('.zp_gsxq_dz > input').eq(0).val(a+"/"+b);
        $('#zp_gsxq_bd_tck').css({
            "display":"none"
        });
        $(this).parent().parent().css({
            "display":"none",
            "width":"0",
            "height":"0"
        })
    });
//   添加公司产品开始
    var btnId = 0;
    $('.zp_gsxq_cpjs_div1').on("click",function (){
        btnId++;
        $(this).before('<div class="zp_gsxq_cpjs_cp"><div class="zp_gsxq_cpjs_cp_left"><h3></h3><div onclick="aaa('+btnId+')" class="zp_gsxq_ttbg"></div><input id="mybtn'+btnId+'" name="file" class="zp_gsxq_cp_file" type="file" style="display: none"></div><div class="zp_gsxq_cpjs_cp_right"><input type="text" placeholder="请输入产品名称">   <textarea>请输入产品信息</textarea></div> <div style="clear:both"></div><span>X</span></div>')
        //   产品关闭按钮
        $('.zp_gsxq_cpjs_cp >  span').on("click",function (){
            $(this).parent().remove();//自杀
        });
        function aaa (btnId) {
            alert(btnId);
        }
        //图片功能开始
        $('#tttbg'+btnId).on("click",aa(btnId));
        function aa(ac) {
            console.log(ac);
            return aaa;
        }
    });
});
    function aaa (btnId) {
        alert(btnId);
        var dd = document.getElementById("mybtn"+btnId);
        console.log(dd);
        
    }
