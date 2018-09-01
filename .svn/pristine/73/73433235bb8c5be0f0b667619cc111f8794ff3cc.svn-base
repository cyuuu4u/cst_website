/**
 * Created by molin on 2016/12/27.
 */
$(document).ready(function() {
//============================浏览器版本判断=====================================
    updateIE();
    function updateIE() {
        var browser = navigator.appName;
        var b_version = navigator.appVersion;
        var version = b_version.split(";");
        if (version.length > 1) {
            var trim_Version = parseInt(version[1].replace(/[ ]/g, "").replace(/MSIE/g, ""));
            if (trim_Version <= 9) {
                // $("#updateIE").addClass("updateIE").text("当前浏览器版本过低，为了更好的用户体验，快升级你的浏览器");
                var txt=  "您当前浏览器的版本太低了，为了更好的浏览体验，请升级您的浏览器";
                window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.warning);
                return false;
            }
        }
        return true;
    }

//===================导航栏====================================
    $('.menu > li').each(function () {
        var $me = $(this).children(0);
        var popId = $me.attr("id");
        popId = "nav" + popId.substring("navMenu".length);

        var flag=0;
        if ($me.attr('class').indexOf('nav_menu_cur') > 0){
            flag=1;
        }
/*导航栏换图*/

        $(".pic_hide").hide();
        $(this).hover(
            function(){
                $me.children(".pic_show").hide();
                $me.children(".pic_hide").show();
            }
            , function(){
                $me.children(".pic_hide").hide();
                $me.children(".pic_show").show();
            }
        );

/*导航栏下拉菜单*/
        $(this).hoverDelay({
            hoverDuring: 200,//鼠标经过延时事件
            outDuring: 0,
            hoverEvent: function () {
                $("#"+popId).show();
            },
            outEvent: function () {
                $("#"+popId).hide();
            }
        });
    });

    $(".nav_item").hover(
        function() {
            var clr = $(this).parentsUntil("li").last().css("background-color");
            $(this).children("a").css("color", clr);
            $(this).css("background-color", "white");
        },

        function() {
            var clr = $(this).parentsUntil("li").last().css("background-color");
            $(this).css("background-color", clr);
            $(this).children("a").css("color", "white");
        }
    );

    $('.timeline_year').timeAxis();

});

////////////////////////////////////////////////////////////////////////////////////////////////////
$.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);    //匹配目标参数
    if (r != null) return unescape(r[2]);return null;
};

$.fn.timeAxis = function() {
    // this是当前jQuery对象，即$(selector)
    var jqSelf = this;
    var now = new Date();
    var yyyy = parseInt(now.getFullYear());    // 年
    var mm = parseInt(now.getMonth()) + 1;     // 月, 改成基于1始

    // return jqSelf.each(function(index, element) {  // 这么写index是序号 element == this
    jqSelf.each(function() {             // each()函数返回当前jQuery对象本身,以便调用后续jquery对象链
        if (this.tagName !== 'UL') return;//判断标签名
        var url = $(this).attr('url');

        var str = "";
        for (var y = yyyy; y >= 2010; y--) {//动态创建时间轴，动态创建年份
            str += "<li class='timeline_year2" + "'>";
            str += "    <div class='timeline_year_botton'>" + y + "</div>\n";//年
            str += "    <ul class='timeline_month'>\n";//月
            for (var m = (y == yyyy) ? mm : 12; m > 0; m--) {//动态创建月份
                str += "        <li class='timeline_month_" + (m % 2 ? 'r' : 'l')
                    + ((y == yyyy && m == mm) ? ' active' : '')
                    + "' style='width:60px;'><a href='" + url + "?ym=" + y + m + "'>" + m + "月</a></li>\n";
            }//时间轴为当前年月  月份加“active”否则不加
            str += "        <li class='timeline_line2'></li>\n";
            str += "    </ul>\n";
            str += "</li>\n";
            str += "<!--相隔线-->\n";
            str += "<li class='timeline_line'></li>\n";
        }
        str += "<li class='timeline_line3'></li>\n";
                
        $(this).html(str);
    });

    //点击大栏目
    $("li", jqSelf).click(function() {
        $("li.active",$(this).parent()).removeClass("active");
        $(this).addClass("active");
        $("ul>li:first",this).addClass("active");
    });

    var xx = $.getUrlParam('ym');
    var def_ym;
    var date = new Date();
    var y =date.getFullYear();//年
    var m= date.getMonth();//月
    if (! xx) {
        /*xx = "20174";*/
        var ym2 = "" + y;//当前时间的年月，字符串
        ym2 +=(m+1);
        // 第几个li,年 如2015年 n_li=2
        var n_li = y - y;
        var m_li = 12 - m;
        /*alert(ym2);*/
        $('li.timeline_year2', jqSelf).eq(n_li).addClass("active");
        $('li.timeline_year2', jqSelf).eq(n_li).find('li').eq(m_li).addClass("active");
    }

    else {
        var y2=xx.substring(0,4);
        var n_li2=y - y2;
        var m2=xx.substring(4,xx.length);
        var m_li2;
        if(n_li2 == 0){
            var m_li2=m - m2 + 1;
        }
        else {
            var m_li2 = 12 - m2;
        }
        def_ym=y2+'/'+m2;//时间轴缺省页的时间显示
        $("li.active",$(this).parent()).removeClass("active");
        $('li.timeline_year2', jqSelf).eq(n_li2).addClass("active");
        $('li.timeline_year2', jqSelf).eq(n_li2).find('li').eq(m_li2).addClass("active");
    }

    /*时间轴无内容页面时间显示*/
    var def = "content";
    var hre = window.location.href;
    var def2 = hre.indexOf(def);
    if(def2 >= 0){
        $('div.release-time').text(def_ym);
    }

    return jqSelf;
};
