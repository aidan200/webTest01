/**
 * Created by Administrator on 2017/7/6.
 */
$(function (){
    
   $(".zp_jianli_xg").eq(0).on("click",function (){  //基本信息
       $('.zp_jianli_cont_left_top2_top').css("display","none");
       $('.zp_jianli_zl_1').css("display","block");
       
       
       $('#zp_jianli_bd_1_qx').on('click',function (){
           $('.zp_jianli_cont_left_top2_top').css("display","block");
           $('.zp_jianli_zl_1').css("display","none");
       })
   })

    $(".zp_jianli_xg").eq(1).on("click",function (){  //基本信息
        $('.zp_jianli_cont_left_jbzl_yl').css("display","none");
        $('.zp_jianli_zl_2').css("display","block");

        $('#jbzl_2_qx').on('click',function (){
            $('.zp_jianli_cont_left_jbzl_yl').css("display","block");
            $('.zp_jianli_zl_2').css("display","none");
        })

    });
    $(".zp_jianli_xg").eq(2).on("click",function (){
        $('.zp_jianli_cont_left_zyyx_yl').css("display","none");
        $('.zp_jianli_zl_3').css("display","block");


        $('#zp_jianli_zl_3_qx').on('click',function (){
            $('.zp_jianli_cont_left_zyyx_yl').css("display","block");
            $('.zp_jianli_zl_3').css("display","none");
        })
        
    })
    $(".zp_jianli_xg").eq(3).on("click",function (){
        $('.zp_jianli_cont_left_gzjl_yl').css("display","none");
        $('.zp_jianli_zl_4').css("display","block");


        $('#jbzl_4_qx').on('click',function (){
            $('.zp_jianli_cont_left_gzjl_yl').css("display","block");
            $('.zp_jianli_zl_4').css("display","none");
        })

    })
    $(".zp_jianli_xg").eq(4).on("click",function (){

    })
    $(".zp_jianli_xg").eq(5).on("click",function (){

    })






});