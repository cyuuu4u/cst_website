$(document).ready(function() {
	$(function(){
		$.mopoPost ({
			url : 'frontdocument_showDocumentByKindId1.action?documentKindId='+5,
            success : function(resp) {
            	var flag=resp.data;
            	if (!flag){
            		$('#divimage1').remove();
            		alert("1没有数据");
            	}
            	else{
            		document.getElementById("a1").href="indextext.html?id="+resp.data.id;
            	    document.getElementById('time1').innerHTML = resp.data.lastEditTime;
            	    document.getElementById('a1').innerHTML = resp.data.name;
            	    var src = resp.data.url;//判断是否有图片
            	    if(!src){
            		    $('#divimage1').remove();
            	    }
            	else{
            		//var srcs = new Array(resp.data.urls);//文章多张图片
                	var srcs = "\.\.\/"+resp.data.urls;//上一级目录
                	$('#image1').find('img').attr('src',srcs);//文章中的图片
            	}
            	document.getElementById('description1').innerHTML = resp.data.desc;
            	}//resp.data.contont;
            },
		});
	});	
	$(function(){
		$.mopoPost ({
			url : 'frontdocument_showDocumentByKindId2.action?documentKindId='+5,
            success : function(resp) {
            	var flag=resp.data;
            	if (!flag){
            		$('#divimage2').remove();
            		alert("2没有数据");
            	}
            	else{
            	document.getElementById("a2").href="indextext.html?id="+resp.data.id;
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
	});	
	
	$(function(){
		$.mopoPost ({
			url : 'frontdocument_showDocumentByKindId3.action?documentKindId='+5,
            success : function(resp) {
            	var flag=resp.data;
            	if (!flag){
            		$('#divimage3').remove();
            		alert("3没有数据");
            	}
            	else{
            	document.getElementById("a3").href="indextext.html?id="+resp.data.id;
            	document.getElementById('time3').innerHTML = resp.data.lastEditTime;
            	document.getElementById('a3').innerHTML = resp.data.name;
            	var src = resp.data.url;//判断是否有图片
            	if(!src){
            		$('#divimage3').remove();
            	}
            	else{
            		//var srcs = new Array(resp.data.urls);//文章多张图片
                	var srcs = "\.\.\/"+resp.data.urls;//上一级目录
                	$('#image3').find('img').attr('src',srcs);//文章中的图片
            	}
            	document.getElementById('description3').innerHTML = resp.data.desc;
            	}//resp.data.contont;
            },
		});
		
		$(function(){
			$.mopoPost ({
				url : 'frontdocument_showDocumentByKindId4.action?documentKindId='+5,
	            success : function(resp) {
	            	var flag=resp.data;
	            	if (!flag){
	            		$('#divimage4').remove();
	            		alert("4没有数据");
	            	}
	            	else{
	            	document.getElementById("a4").href="indextext.html?id="+resp.data.id;
	            	document.getElementById('time4').innerHTML = resp.data.lastEditTime;
	            	document.getElementById('a4').innerHTML = resp.data.name;
	            	var src = resp.data.url;//判断是否有图片
	            	if(!src){
	            		$('#divimage4').remove();
	            	}
	            	else{
	            		//var srcs = new Array(resp.data.urls);//文章多张图片
	                	var srcs = "\.\.\/"+resp.data.urls;//上一级目录
	                	$('#image4').find('img').attr('src',srcs);//文章中的图片
	            	}
	            	document.getElementById('description4').innerHTML = resp.data.desc;
	            	}//resp.data.contont;
	            },
			});
		});	
	});	
});

