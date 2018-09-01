
$(document).ready(function () {
    //------------------------------------------------------------
    // 可选的文章分类显示
    $('#comboBoxAdd').combobox({
		panelHeight:"auto",
	    valueField:'code',
	    textField:'name',
	    url:"document_showDocmentKind.action?parentCode="+$('#idKindId').val(),
	    editable:false
	    /*onSelect: function(rec){
	        var url = 'get_data2.php?id='+rec.id;
	        }*/	    
	});
    //--------------------------------------------------------------
    //ckeditor和复选框的内容提交
    $('#idBtnSubmit').bind('click', function(){
    	if($('#idLayoutPage').form('validate')) {
			var url="document_upload.action";
			var sel = $('#comboBoxAdd').combobox('getValue');
			$.mopoSubmit({
				"formId" 	: "idFileForm",		// 填要提交的表单的ID
				"url"		: url,
				"data"		: {"documentKindId" : sel},
				"success" 	: function(resp) {
					function Reset() {
				           $('idFileForm').each(function() {
				        	   //获取CKEidtor的数据
				        	   //var val = CKEDITOR.instances.editor.getData();
				               this.reset(); //将表单的元素恢复初始化
				               //清空所有ckeditor
				               for (instance in CKEDITOR.instances)
				                   CKEDITOR.instances[instance].setData("");
				           });
				       }
					$.messager.show({title : '提示', msg : resp.message});
					window.location.href='goto.action?a=document&id='+$('#idKindId').val();
				}
			});
		}
    });

});

