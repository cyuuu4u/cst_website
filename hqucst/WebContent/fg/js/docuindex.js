$(document).ready(function() {
	$(function(){
		var reg = new RegExp("(^|&)"+ "id" +"=([^&]*)(&|$)");
	    var r = window.location.search.substr(1).match(reg);
		var id=unescape(r[2]);
		$.mopoPost ({
			url : 'frontdocument_showDocumentById.action?id='+id,
            success : function(resp) {
            	document.getElementById('time').innerHTML = resp.data.lastEditTime;
            	document.getElementById('title').innerHTML = resp.data.name;
            	document.getElementById('description').innerHTML = resp.data.contont;
            	var src = resp.data.url;//判断是否有图片
            	if(!src){
            		$('#divImage').remove();
            	}
            	else{
            		//var srcs = new Array(resp.data.urls);//文章多张图片
                	var srcs = "\.\.\/"+resp.data.urls;//上一级目录
                	$('#image').find('img').attr('src',srcs);//文章中的图片
            	}
            	}//resp.data.contont;
		});
	});	
	/*$(function(){
		$.mopoPost ({
			url : 'frontdocument_showDocumentByKindId2.action?documentKindId='+5,
            success : function(resp) {
            	var flag=resp.data;
            	if (!flag){
            		$('#divimage2').remove();
            		alert("2没有数据");
            	}
            	else{
            	document.getElementById('time2').innerHTML = resp.data.lastEditTime;
            	document.getElementById('a2').innerHTML = resp.data.name;
            	var src = resp.data.url;//判断是否有图片
            	if(!src){
            		$('#divimage2').remove();
            	}
            	else{
            		//var srcs = new Array(resp.data.urls);//文章多张图片
                	var srcs = "\.\.\/"+resp.data.urls;//上一级目录
                	$('#image2').find('img').attr('src',srcs);//文章中的图片
            	}
            	document.getElementById('description2').innerHTML = resp.data.desc;
            	}//resp.data.contont;
            },
		});
	});	*/
});

