/**
 * Created by Administrator on 2017/7/6.
 */

var aa={     //假设AJAX后台数据'
    cstime:[0,1,2,3,4,5,6],
    cstime_dq:3,sj:13125441497,
    zt:["很好","一般"],
    zt_dq:"很好",
    yx:"1192487554@qq.com",
    hyzk:["结婚","未结婚"],
    hyzk_dq:"未结婚"
};
// 基本资料构造函数
function obj_zbzl(){
    this.cstime='';
    this.sj=0;
    this.zt='';
    this.hyzk='';
    this.youxiang='';
}
obj_zbzl.prototype.bindingDOM=function (){//绑定基本信息

    $('#jl_cstime').html(this.cstime);  //出生事件
    $('#jl_sj').val(this.sj);          //手机号
    $('#jl_zt').html(this.zt);          //状态
    $('#jl_yx').val(this.youxiang);    //邮箱
    $('#jl_hyzk').html(this.hyzk);  //婚姻状况

};

obj_zbzl.prototype.init=function (data){    //初始化赋值

    $.ajax({
        type:"get",    //提交方式
        async:true,  //是否异步
        url:'http://localhost:63342/webTest01/zp_jianli.html',    //路径
        dataType:"jsonp", //返回的数据类型
        jsonp:"cb",   //传递给请求出来程序或者页面的，用以获得jsonp回调函数名的参数名(默认为：callback)
        jsonpCallback:"callback",//自定义的jsonp回调函数名称
        success:function (data2){//data 就是数据 json
            this.init(data2);
        },error:function (){ //报错执行的
            alert('aaa')
        }
    });
    //时间下拉框初始化开始
    var jl_cstime='';
    for(var i=0;i<data.cstime.length;i++){
        if(data.cstime[i]==data.cstime_dq){     //判断那个是当前选择的
            jl_cstime+='<option selected>'+data.cstime[i]+'</option>'
        }else{
            jl_cstime+='<option>'+data.cstime[i]+'</option>'
        }
    }
    this.cstime=jl_cstime;
    //时间下拉框初始化完成

    this.sj=data.sj;      //手机号初始化

    //状态下拉框初始化开始
    var jl_zt='';
    for(var i=0;i<data.zt.length;i++){
        if(data.zt[i]==data.zt_dq){     //判断那个是当前选择的
            jl_zt+='<option selected>'+data.zt[i]+'</option>'
        }else{
            jl_zt+='<option>'+data.zt[i]+'</option>'
        }
    }
    this.zt=jl_zt;
    //状态下拉框结束
    this.youxiang=data.yx;   //邮箱
    //婚姻状况下拉框初始化开始
    var jl_hyzk='';
    for(var i=0;i<data.hyzk.length;i++){
        if(data.hyzk[i]==data.hyzk_dq){     //判断那个是当前选择的
            jl_hyzk+='<option selected>'+data.hyzk[i]+'</option>'
        }else{
            jl_hyzk+='<option>'+data.hyzk[i]+'</option>'
        }
    }
    this.hyzk=jl_hyzk;
    //婚姻状况下拉框初始化完成

};
obj_zbzl.prototype.bindingSJ=function () {      //绑定的事件
    $('#jbzl_2_qx').on('click',function (){
        $('.zp_jianli_zl_2').css({"display":"none"})
    })
};

//基本资料结束

//个人信息开始
function obj_yhxx(){
        this.name='';
        this.xb='';
        this.dqhy='';
        this.gznf='';
        this.zwmc='';
        this.dqcs='';
        this.DOM={
            oname: $('#jl_name'),
            oxb:   $('#jl_xb'),
            odqhy: $('#jl_dqhy'),
            ogznf: $('#jl_gznf'),
            ozwmc: $('#jl_zwmc'),
            odqcs: $('#jl_dqcs')
        }
}
obj_yhxx.prototype.bindingDOM=function (){
        this.DOM.oname=this.name;
        this.DOM.oxb=this.xb;
        this.DOM.odqhy=this.dqhy;
        this.DOM.gznf=this.gznf;
        this.DOM.ozwmc=this.zwmc;
        this.DOM.dqcs=this.dqcs;
};













$(function (){
    $('.zp_jianli_xg').eq(1).on('click',function (){
        //    创建基本资料对象实例
        var obj__zbzl=new obj_zbzl();
        obj__zbzl.init();                          //赋值初始化
        obj__zbzl.bindingSJ();                      //调用事件
        obj__zbzl.bindingDOM();                     //调用绑定方法
        $('.zp_jianli_zl_2').css({"display":"block"});//显示
    })
});






