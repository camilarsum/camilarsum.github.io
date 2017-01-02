/**
 * Created by Administrator on 2016/12/31 0031.
 */
$(function(){
    /*头像选择*/
    $("#colImg").click(function(){
        $("#changeImg").click();
    });

    $("#changeImg").change(function(){
        var objUrl = getObjectURL(this.files[0]) ;
        console.log("objUrl = "+objUrl) ;
        if (objUrl) {
            $("#colImg").attr("src", objUrl) ;
        }
    }) ;

    function getObjectURL(file) {
        var url = null ;
        if (window.createObjectURL!=undefined) { // basic
            url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
    };








    /*性别选择框*/
    $('#gender').mobiscroll().select({
        theme: 'mobiscroll',
        lang: 'zh',
        display: 'bottom',
        minWidth: 200,
        setText: '确定',
        cancelText: '取消',
        placeholder:"请输入性别",
        layout:'fixed',
        headerText:function(valueText){return "选择性别";}
    });


    /*出生日期选择框*/
    var currYear = (new Date()).getFullYear();//获取当前年份
    var now = new Date();
    minDate = new Date(now.getFullYear() - 70, 0, 1);
    maxDate = new Date(now.getFullYear() - 18, 11, 31);
    var iniDate= new Date(now.getFullYear() - 30, 11, 31);

    $('#birthday').mobiscroll().date({
        theme: 'mobiscroll',
        lang: 'zh',
        display: 'bottom',
        /*startYear:currYear - 30, //开始年份
        endYear:currYear - 18, //结束年份*/
        minDate: minDate,
        maxDate: maxDate,
        setText: '确定',
        cancelText: '取消',
        width :200,
        fixedWidth: 300,
        height:50,
        dateWheels: 'mmyy',
        defaultValue: iniDate,
        dateOrder : 'yyyymmdd', //面板中日期排列格式，且改为全数字显示
        dateFormat: 'yyyy-mm-dd',
        headerText:function(valueText){return "请选择您的出生日期";}
    });

    /*身高选择*/
    $('#pHeight').mobiscroll().number({
        theme: 'mobiscroll',
        lang: 'zh',
        setText: '确定',
        cancelText: '取消',
        height:50,
        display: 'bottom',
        step: 1,
        min: 140,
        max: 200,
        layout: 'fixed',
        fixedWidth: 300,
        defaultValue: ['160'],
        headerText:function(valueText){return "请选择您的身高";}

    });

    /*体重选择*/
    $('#pWeight').mobiscroll().number({
        theme: 'mobiscroll',
        lang: 'zh',
        setText: '确定',
        cancelText: '取消',
        height:50,
        display: 'bottom',
        step: 1,
        min: 40,
        max: 150,
        layout: 'fixed',
        fixedWidth: 300,
        defaultValue: ['60'],
        headerText:function(valueText){return "请选择您的体重";}

    });





























    /*
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
            startYear:currYear - 70, //开始年份
            endYear:currYear - 18, //结束年份
            setText: '确定',
            cancelText: '取消',
            width :200,
            height:60,
            max:currYear - 10,
            dateOrder : 'yyyymmdd', //面板中日期排列格式，且改为全数字显示
            headerText:function(valueText){return "选择您的出生日期";}
        };

        $("#appDate").val('').scroller('destroy').scroller($.extend(opt['date'], opt['default']));




        //性别选择弹框
        var s_width_ = document.documentElement.scrollWidth-12;
        $("#gender").mobiscroll().select({
            theme:"android-ics light",
            lang:"zh",
            setText: '确定',
            cancelText: '取消',
            placeholder:"请输入性别",
            height:50,
            width :s_width_,
            display: 'bottom',
            /!*defaultValue: ['男'],*!/
            headerText:function(valueText){return "选择性别";},
            onShow:function mobiscroll_show(html, valueText, inst){
                $(this).hide();
            }

        });




        /!*身高选择弹框*!/
        $("#pHeight").mobiscroll().number({
            theme:"android-ics light",
            lang:"zh",
            setText: '确定',
            cancelText: '取消',
            height:50,
            /!*width :s_width_,*!/
            display: 'bottom',
            step: 1,
            min: 10,
            max: 150,
            layout: 'fixed',
            fixedWidth: 150

        });
    */


























})