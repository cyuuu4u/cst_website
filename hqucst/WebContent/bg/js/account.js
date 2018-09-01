
$(document).ready(function () {
    //------------------------------------------------------------
    // 数据网格
    $('#idDgAccount').datagrid({
        title : '帐户列表',
        fitColumns: true,
        striped : true, //斑马线
        rownumbers : true,
        checkOnSelect: true,
        pagination : true,
        pagePosition: 'bottom',
        pageList : [10,20,50,100],
        pageSize : 20,
        pageNumber : 1,
        singleSelect : false,
        toolbar : '#idToolAccount',
        //url : 'bgUser_listUser.action',
        data : listAccount,
        columns:[[
            {
                field : 'id',
                title : '编号',
                width : 40,
                checkbox : true
            },
            {
                field : 'status',
                title : '状态',
                width : 40
            },
            {
                field : 'loginName',
                title : '工号',
                width : 80
            },
            {
                field : 'name',
                title : '姓名',
                width : 120
            },
            {
                field : 'kind',
                title : '职务',
                width : 100
            },
            {
                field : 'phone',
                title : '电话',
                width : 100
            },
            {
                field : 'email',
                title : '电子邮箱',
                width : 100
            },
            {
                field : 'loginTime',
                title : '最后登录时间',
                width : 100
            }
        ]]
        //rownumbers : false,
    }).datagrid("getPager").pagination({
        showRefresh:false
    }); // end of $('#idDgAccount').datagrid...

    //------------------------------------------------------------
    // 工具栏操作类
    toolAccount = {
        add : function() {
            $('#idDlgAccount').form('load', {
                accountId :    '0',
                loginName :  '',
                name :      '',
                phone :     '',
                email:      ''
            }).dialog({title : '添加帐号'}).dialog('open');
        },

        remove : function() {
            var rows =  $('#idDgAccount').datagrid('getSelections');
            if (rows.length > 0) {
                $.messager.confirm('确定操作', '你确定要删除所选的记录吗？', function(flag) {
                    if(flag) {
                        var ids = [];
                        for (var i = 0; i < rows.length; i++) {
                            ids.push(rows[i].id);
                        }
                        //ajax...
                    }
                });
            } else {
                $.messager.alert('提示', '请选择要删除的记录！！', 'info');
            }
        },

        edit : function() {
            var rows =  $('#idDgAccount').datagrid('getSelections');
            if (rows.length == 1) {
                $('#idDlgAccount').form('load',{
                    accountId : rows[0].id,
                    loginName : rows[0].loginName,
                    name :      rows[0].name,
                    phone :     rows[0].phone,
                    email:      rows[0].email
                }).dialog({title : '编辑帐号信息'}).dialog('open');
            } else {
                $.messager.alert('警告', '修改必须选中且只能选中一行！！', 'warning');
            }
        },

        authorize : function() {
            var rows =  $('#idDgAccount').datagrid('getSelections');
            if (rows.length == 1) {
                $('#idDlgPrivilege').form('load',{
                    accountId : rows[0].id
                }).dialog({title : '为(' + rows[0].loginName + ')分配权限'}).dialog('open');
            } else {
                $.messager.alert('警告', '分配必须选中且只能选中一行！！', 'warning');
            }
        },

        reload : function() {
            $('#idDgAccount').datagrid('reload');
        },

        inverse : function() {
            $("#idDgAccount").inverse();
        }
    }; // end of toolAccount = {...

    //------------------------------------------------------------
    // 编辑帐号信息对话框
    $('#idDlgAccount').dialog({
        width : 400,
        title : '编辑帐号信息',
        modal : true,
        closed : true,
        buttons : [{
            text : '提交',
            iconCls : 'icon-ok'
        },{
            text : '取消',
            iconCls : 'icon-cancel',
            handler : function() {
                $('#idDlgAccount').dialog('close').form('reset')
            }
        }]
    }); // end of $('#idDlgAccount').dialog...

    //////////////////////////////////////////////////////////////
    // 权限操作

    $('#idDlgPrivilege').dialog({
        width : 600,
        height: 500,
        title : '分配权限',
        modal : true,
        closed : true,
        buttons : [{
            text : '提交',
            iconCls : 'icon-ok'
        },{
            text : '取消',
            iconCls : 'icon-cancel',
            handler : function() {
                $('#idDlgPrivilege').dialog('close').form('reset')
            }
        }]
    }); // end of $('#idDlgPrivilege').dialog...

    //--------------------------------------------------------
    // 角色分配
    $('#idDlRoleGot').datalist({
        // url: 'datalist_data1.json',
        title: '已担当的角色',
        checkbox: true,
        lines: true,
        multiple: true,
        valueField: 'code',
        textField: 'name',
        width: '100%',
        data: listRoleGot
    });

    $('#idDlRoleRemaining').datalist({
        // url: 'datalist_data1.json',
        title: '可担当的角色',
        checkbox: true,
        lines: true,
        multiple: true,
        valueField: 'code',
        textField: 'name',
        width: '100%',
        data: listRoleRemaining
    });

    $('#idBtn2RoleRemaining').bind('click', function(){
        var sel = $('#idDlRoleGot').datalist("getSelections");
        $.each(sel, function(i, row) {
            //alert(row.code + "," + row.name);
            $('#idDlRoleRemaining').datalist("appendRow", row);
            $('#idDlRoleGot').datalist("deleteRow", $('#idDlRoleGot').datalist("getRowIndex", row));
        });
    });

    $('#idBtn2RoleGot').bind('click', function(){
        var sel = $('#idDlRoleRemaining').datalist("getSelections");
        $.each(sel, function(i, row) {
            //alert(row.code + "," + row.name);
            $('#idDlRoleGot').datalist("appendRow", row);
            $('#idDlRoleRemaining').datalist("deleteRow", $('#idDlRoleRemaining').datalist("getRowIndex", row));
        });
    });

    //--------------------------------------------------------
    // 角色分配
    $('#idDlGot').datalist({
        // url: 'datalist_data1.json',
        title: '已获得的权限',
        checkbox: true,
        lines: true,
        multiple: true,
        valueField: 'code',
        textField: 'name',
        width: '100%',
        data: listPrivilegeGot
    });

    $('#idDlRemaining').datalist({
        // url: 'datalist_data1.json',
        title: '可添加的权限',
        checkbox: true,
        lines: true,
        multiple: true,
        valueField: 'code',
        textField: 'name',
        width: '100%',
        data: listPrivilegeRemaining
    });

    $('#idBtn2Remaining').bind('click', function(){
        var sel = $('#idDlGot').datalist("getSelections");
        $.each(sel, function(i, row) {
            //alert(row.code + "," + row.name);
            $('#idDlRemaining').datalist("appendRow", row);
            $('#idDlGot').datalist("deleteRow", $('#idDlGot').datalist("getRowIndex", row));
        });
    });

    $('#idBtn2Got').bind('click', function(){
        var sel = $('#idDlRemaining').datalist("getSelections");
        $.each(sel, function(i, row) {
            //alert(row.code + "," + row.name);
            $('#idDlGot').datalist("appendRow", row);
            $('#idDlRemaining').datalist("deleteRow", $('#idDlRemaining').datalist("getRowIndex", row));
        });
    });

});
