/**
 * Created by Administrator on 2017/7/6.
 */
$(function (){
    var jianli_name=function (){
            this.name_bt="",
            this.name_val=""
    };
    jianli_name.prototype.name_btSet=function (val){
        this.name_bt=val
    };
    jianli_name.prototype.name_btGet=function (){
        return this.name_bt
    };

    var aa=new jianli_name();
    aa.name_btSet("adad");
    alert(aa.name_btGet())





});