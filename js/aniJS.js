/**
 * Created by Administrator on 2017/6/29.
 */
var oldFtopW;
var oldFtopf;
var newfDiv;
var ff = false;
$(document).ready(function(){
    var anifTop = document.getElementsByClassName("anifTopLe")[0];
    oldFtopf = anifTop.parentNode;
    oldFtopW = oldFtopf.offsetWidth;
    var ml = $(oldFtopf).css('paddingLeft');
    var ss = ml.substring(0,ml.indexOf('px'));
    newfDiv = anifTop.cloneNode(true);
    $(newfDiv).addClass('anifTop');
    $(newfDiv).width(oldFtopW-ss);
})
window.onscroll = function () {
    anflisten();
}

//滚动后浮动顶部元素
function anflisten() {
    var anifTop = document.getElementsByClassName("anifTopLe")[0];
    var s = anifTop.getBoundingClientRect().top;
    var oinpt = anifTop.getElementsByClassName("anifInput")[0];
    var iinpt = newfDiv.getElementsByClassName("anifInput")[0];
        if(s<=0){
            if(!ff){
                console.log(oinpt.value);
                iinpt.value = oinpt.value;
                oldFtopf.appendChild(newfDiv);
                ff = true;
            }
        }else{
            if(ff){
                oinpt.value = iinpt.value;
                oldFtopf.removeChild(newfDiv);
                ff = false;
            }
        }
}

//获取滚动距离
function ___getPageScroll() {
    var xScroll, yScroll;
    if (self.pageYOffset) {
        yScroll = self.pageYOffset;
        xScroll = self.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
        yScroll = document.documentElement.scrollTop;
        xScroll = document.documentElement.scrollLeft;
    } else if (document.body) {// all other Explorers
        yScroll = document.body.scrollTop;
        xScroll = document.body.scrollLeft;
    }
    arrayPageScroll = new Array(xScroll,yScroll);
    return arrayPageScroll;
};