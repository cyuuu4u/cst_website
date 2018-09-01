//mopo.js
$(document).ready(function() {
	
});

// easyui datagrid inverse-selection
$.fn.inverse = function() {
    // this是当前jQuery对象，即$(selector)， 例:$('a'),则this=$('a')
    var jqSelf = this;
    
    var all = jqSelf.datagrid("getRows");
    $.each(all, function(i, item) {
        var sel = "div.datagrid-cell-check input[type='checkbox'][value='" + item.id + "']";
        //alert($(sel).is(':checked'));
        if (jqSelf.parent().find(sel).is(':checked')) {
            jqSelf.datagrid("unselectRow", i);
        }
        else {
            jqSelf.datagrid("selectRow", i);
        }
    });
    
    return jqSelf;
};

/**
 * options ：同$.mopoPost和$.mopoSubmit
 */
$.handleResponse = function(options, resp) {
	// {"data":{},"message":"用户名和密码不匹配。","op":"NULL","rows":null,"success":false,"total":0}
	if (resp) {
		if (resp.success) {
            if (options.success) {
                options.success.call(self, resp);
            }
        } 
        else {
        	if (resp.op === "NEED_LOGIN") {
        		$.messager.alert("Warning", resp.message);
        		window.location.href = '../index.html';
        	}
        	else if (options.error) {
        		if (resp.op !== "INVALID_FORM" && !resp.message) {
        			$.messager.alert("Warning", "服务器发生未知错误，请联系系统管理员！");
        		}
        		else {
        			options.error.call(self, resp);
        		}
            } else if (resp.message){
            	$.messager.alert("Warning", resp.message);
            }
        }
    } else {
    	$.messager.alert("Warning", "服务端响应错误!");
    }
}

/**
 * options = { 
 * 		"url" : 	服务端地址，不包含BASE_URL
 * 		"data":		提交的参数
 * 		"success" : 请求成功后的回调，参数(result) 
 * 		"error" :   请求失败后的回调，参数(message)
 */
$.mopoPost = function() {
	var options = {url:"",data:{},success:null,error:null};
	var self = this;
	
	if (arguments.length == 1 && typeof(arguments[0]) === 'object') {
		options = arguments[0];
	}
	else if (arguments.length == 2 && typeof(arguments[0]) === 'string' && typeof(arguments[1]) === 'function') {
		options.url = arguments[0];
		options.success = arguments[1];
	}
	else if (arguments.length == 2 && typeof(arguments[0]) === 'string' && typeof(arguments[1]) === 'object' && typeof(arguments[2]) === 'function') {
		options.url = arguments[0];
		options.data = arguments[1];
		options.success = arguments[2];
	}
	else {
		alert('$.mopoPost参数错');
		return;
	}

	$.ajax({
        url 		: options.url,
        type 		: 'POST',
        dataType 	: 'json',
        data 		: options.data,
        beforeSend 	: function() {
            $.messager.progress({
                text : '数据提交中...'
            });
        },
        success 	: function(resp) {
            $.messager.progress('close');
            $.handleResponse(options, resp);
        },
        error 		: function() {
        	$.messager.progress('close');
        	$.messager.alert("Warning", "网络错误!");
        }
    });
};

/**
 * options = {
 * 		"formId":	要提交的表单的ID 
 * 		"url" : 	服务端地址，不包含BASE_URL
 * 		"data":		提交的额外参数
 * 		"success" : 请求成功后的回调，参数(result) 
 * 		"error" :   请求失败后的回调，参数(message)
 */
$.mopoSubmit = function(options) {
	var $jqForm = $('#' + options.formId);
	if (!options.formId || !options.url || $jqForm.size() == 0 || $jqForm.get(0).tagName !== 'FORM') {
		alert('$.mopoSubmit参数错');
		return;
	}
	
	$.messager.progress({text : '表单数据提交中...'});
	$jqForm.form('submit', {
		url 		: options.url,
		onSubmit 	: function(param) {
			var isValid = $(this).form('validate');
			if (!isValid){
				$.messager.progress('close');
			}
			else if (options.data){
				for ( var key in options.data) {
					param[key] = options.data[key];
				}
			}
			return isValid;
		},
		success 	: function(resp) {
            $.messager.progress('close');
            $.handleResponse(options, JSON.parse(resp));
        },
        error   	: function() {
        	$.messager.progress('close');
        	$.messager.alert("Warning", "网络错误!");
        }
	});
};

$.mopoDatagridSuccess = function(resp, dg) {
	if (!resp.success) {
		$.messager.alert('警告', resp.message, 'warning');
	}
	
    /*if (resp.total == 0) {
		// 添加一个新数据行，第一列的值为你需要的提示信息，然后将其他列合并到第一列来，注意修改colspan参数为你columns配置的总列数
		$(dg).datagrid('appendRow', {
			itemid : '<div style="text-align:center;color:red">没有相关记录！</div>'
		}).datagrid('mergeCells', {
			index : 0,
			field : 'itemid',
			colspan : 4
		})
		// 隐藏分页导航条，这个需要熟悉datagrid的html结构，直接用jquery操作DOM对象，easyui datagrid没有提供相关方法隐藏导航条
		$(dg).closest('div.datagrid-wrap').find('div.datagrid-pager').hide();
    }
    //如果通过调用reload方法重新加载数据有数据时显示出分页导航容器
    else 
    	$(this).closest('div.datagrid-wrap').find('div.datagrid-pager').show();*/
};

$.mopoClearFormErrorMsg = function(dlgSelector) {
	$(dlgSelector).find("span[class=alert]").remove();
};

$.mopoSetFormErrorMsg = function(errors, dlgSelector) {
	$dlg = $(dlgSelector);
	$.each(errors, function(idx, msg) {
		var name = idx.substr(3, 1).toLowerCase() + idx.substr(4);
		if (name === 'form') {
			$dlg.find('form').first().prepend("<span class='alert'>" + msg + "</span>");
		}
		else {
			$dlg.find("[name=" + name +"]").after("<span class='alert'>" + msg + "</span>");
		}
	});
};




