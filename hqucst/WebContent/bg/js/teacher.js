$(document).ready(function () {


    $('#idPageCountry_info').panel({
        title:'教师个人简介',
//    	iconCls:'icon-authorize',
        toolbar:'#idToolTeacher'
    });

    toolArticle = {
        upload : function() {
            //打开编辑器
        	if($('#idTeacherInfo').form('validate')) {
				var url="teacher.action";
				$.mopoSubmit({
					"formId" 	: "idTeacherForm",		// 填要提交的表单的ID
					"url"		: url,
					//"data"		: {"documentKindId" : sel},
					"success" 	: function(resp) {
						$.messager.show({title : '提示', msg : resp.message});
                        $('#idDgDocument').datagrid('reload');
                        $('#idDlgDocument').dialog('close').form('reset');
                        $.mopoClearFormErrorMsg('#idDlgDocument');
					}
				});
			}
        }
        /*edit : function() {
            //alert('编辑');
            var rows =  $('#idDlgArticleUp').datalist('getSelections');
            if (rows.length == 1) {
                $('#idDlgArticleUp').form('load',{
                    title : 	rows[0].title,
                    text :      rows[0].text,
                    img:      rows[0].img
                }).dialog({title : '编辑文章'}).dialog('open');
            } else {
                $.messager.alert('警告', '必须选中且只能选中一行！！', 'warning');
            }
        },*/
    };
    //========================================================================
    //编辑文章
    /*$('#idDlgArticleUp').dialog({
        width : 600,
        height: 500,
        title : '编辑文章',
        modal : true,
        closed : true,
        buttons : [{
            text : '提交',
            iconCls : 'icon-ok',
            handler : function() {
                if($('#idDlgArticleUp').form('validate')) {
                    /!*var url="article_add.action?countryId=" + $("#idCountryId").val();*!/
                    $.mopoSubmit({
                        "formId" 	: "idArticleForm",		// 填要提交的表单的ID
                        "url"		: 'article_add.action',
                        "data"		: $("#idDlgArticleUp").find('idArticleForm').serialize(),
                        "success" 	: function(resp) {
                            $.messager.show({title : '提示', msg : resp.message});
                            $('#idDlArticle').datagrid('reload');
                            $('#idDlgArticleUp').dialog('close').form('reset');
                            $.mopoClearFormErrorMsg('#idDlgArticleUp');
                        }
                    });
                }
            }
        },{
            text : '取消',
            iconCls : 'icon-cancel',
            handler : function() {
                $('#idDlgArticleUp').dialog('close').form('reset')
            }
        }]
    });*/

    $('#idTbrief').textbox({//个人简介文本框
        multiline:true,
        width:800,
        height:250
    });

    $('#idTbox').textbox({//科研项目文本框
        multiline:true,
        width:800,
        height:250
    });

    $('#idTthesis').textbox({//论文列表文本框
        multiline:true,
        width:800,
        height:250
    });
    $(function(){
		$.mopoPost ({
			url : 'teacher.action',
            success : function(resp) {
            	//alert(resp.data.researchProject);
            	$("#idTeacherInfo input[name='id']").val(resp.data.id);
                $("#idTeacherInfo input[name='name']").val(resp.data.name);
                $("#idTeacherInfo input[name='sex']").val(resp.data.sex);
                $("#idTeacherInfo input[name='education']").val(resp.data.education);
                $("#idTeacherInfo input[name='job']").val(resp.data.job);
                //$("#idTeacherInfo input[name='individualResume']").val(resp.data.individualResume);
                $('#idTbrief').html(resp.data.individualResume);
                $("#idTeacherInfo input[name='researchProject']").val(resp.data.researchProject);
                $("#idTeacherInfo input[name='papers']").val(resp.data.papers);
            },
		});
	});

});



