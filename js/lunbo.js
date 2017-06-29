$(function (){

    var a=2;//层
    var b=1;//谁

    setInterval(function (){
        var aa=$("#div1 div").length;
        if(b==aa){
            b=0;
        }
        $("#div1 div").eq(b).animate({
            "backgroundPosition":"-50"
        },6000);
        $("#div1 div").eq(b++).css({
            "z-index":++a
        });

    },2000);

});
