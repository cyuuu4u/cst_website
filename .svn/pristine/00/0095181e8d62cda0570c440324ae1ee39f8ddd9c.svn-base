/**
 * Created by molin on 2016/12/27.
 */
$(document).ready(function() {
	
    //================首页大图动画===================
    //bootstrap
    $('#show-image').carousel({
        interval: 2000,
        pause:"hover",
        wrap:true
    });
	
	//====================首页新闻选项卡=================================
    var $div_li =$("dl.tabs dd");
    var tabs_id;
    $div_li.click(function(){
        var tabs_id = $("a").attr('name');
        $(this).addClass("active")            //当前<li>元素高亮
            .siblings().removeClass("active");  //去掉其它同辈<li>元素的高亮
        var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
        $("ul.tabs-content > li")       //选取子节点。不选取子节点的话，会引起错误。如果里面还有div
            .eq(index).show()   //显示 <li>元素对应的<div>元素
            .siblings().hide(); //隐藏其它几个同辈的<div>元素

        $("#"+tabs_id).removeClass('hide').siblings().addClass('hide');//显示tabs相对应的内容

    });

});
