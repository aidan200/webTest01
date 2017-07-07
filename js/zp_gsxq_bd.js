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

    //上传公司头像
    $('.gstb > div').on("click",function (){
        $(this).siblings('input').click().on("change",function (){
            preview(this,'zp_gsxq_bd_logo');
            $('.gstb > div').css({
                "background":"none"
            })
        })
    });
    //公司风采
    var btnID2=0;
    $('.qyfc > h4').on("click",function (){
        $(this).before('<div><div id='+"gsfc"+btnID2+'></div><input type="file" style="display:none"></div>');
        $("#gsfc"+btnID2).on("click",function () {

            $(this).siblings('input').click().on("change",function (){
                var aa=$(this).siblings('div').attr('id');
                $('#'+aa).css({
                    "background":"none"
                })
                preview(this,aa);
            })
        });
        btnID2++
    });
    //   添加公司产品开始
    var btnId = 0;
    $('.zp_gsxq_cpjs_div1').on("click",function (){
        btnId++;
        $(this).before('<div class="zp_gsxq_cpjs_cp"><div class="zp_gsxq_cpjs_cp_left"><h3>请上传一张产品图片</h3><div onclick="aaa('+btnId+')" class="zp_gsxq_ttbg"></div><input form="zp_gsxq_form" id="mybtn'+btnId+'" name="file" class="zp_gsxq_cp_file" type="file" style="display: none"></div><div class="zp_gsxq_cpjs_cp_right"><input form="zp_gsxq_form" type="text" placeholder="请输入产品名称">   <textarea form="zp_gsxq_form">请输入产品信息</textarea></div> <div style="clear:both"></div><span>X</span></div>')
        //   产品关闭按钮
        $('.zp_gsxq_cpjs_cp >  span').on("click",function (){
            $(this).parent().remove();//自杀
        });

    });



});
function aaa (btnId) {
    var dd = document.getElementById("mybtn"+btnId);
    console.log(dd);
    dd.click();
    $(dd).on("change",function (){
        

    });


}
function preview(file,id){//点击图片预览
    var prevDiv = document.getElementById(id);
    if (file.files && file.files[0]){
        var reader = new FileReader();
        reader.onload = function(evt){
            prevDiv.innerHTML = '<img src="' + evt.target.result + '" width="100xp" height="120px"/>';
        }
        reader.readAsDataURL(file.files[0]);
    }else{
        prevDiv.innerHTML = '<div class="img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + file.value + '\'"></div>';
    }
}
