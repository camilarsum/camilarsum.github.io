/**
 * Created by Administrator on 2016/12/31 0031.
 */
$(function(){
    //年龄选择弹框
    var currYear = (new Date()).getFullYear();//获取当前年份
    var opt={};
    opt.date = {preset : 'date'};
    opt.default = {
        theme: 'android-ics light', //皮肤样式
        display: 'bottom', //显示方式
        mode: 'scroller', //日期选择模式
        dateFormat: 'yyyy-mm-dd',
        lang:'zh',
      /*  startYear:currYear - 10, //开始年份
        endYear:currYear + 10, //结束年份*/
        setText: '确定',
        cancelText: '取消',
        width:200,
        height:100,
        max:currYear - 10,
        dateOrder : 'yyyymmdd', //面板中日期排列格式，且改为全数字显示
        headerText:function(valueText){return "选择您的出生日期";}
    };

    $("#appDate").val('').scroller('destroy').scroller($.extend(opt['date'], opt['default']));

    //性别选择弹框
   /* $("#gender").mobiscroll.select({
        theme: 'mobiscroll',
        lang: 'zh',
        display: 'bubble',
        minWidth: 200,
        setText: '确定',
        cancelText: '取消'
    })*/

    $("#treelist").mobiscroll().treelist({
        theme:"android-ics light",
        lang:"zh",
        defaultValue:[Math.floor(('#treelisr').length/2)],
        setText: '确定',
        cancelText: '取消',
        width:200,
        height:100,
        display: 'bottom',
        minWidth: 200,
        headerText:function(valueText){return "选择性别";}


    });

})