
$(document).ready(function () {
    //------------------------------------------------------------
    // 数据网格
    $('#idDgRole').datagrid({
        title : '角色列表',
        fitColumns: true,
        striped : true, //斑马线
        rownumbers : true,
        checkOnSelect: true,
        pagination : true,
        pagePosition: 'bottom',
        pageList : [10,20,50,100],
        pageSize : 20,
        pageNumber : 1,
        singleSelect : true,
        toolbar : '#idToolRole',
        //url : 'bgUser_listUser.action',
        data : listRole,
        columns:[[
            {
                field : 'id',
                title : '编号',
                width : 100,
                checkbox : true
            },
            {
                field : 'name',
                title : '名称',
                width : 100
            }
        ]],
        // 事件
        onSelect: function(rowIndex, rowData) {
            var data = (rowData.id == 1) ? listAccountInRole1 : listAccountInRole2;
            $("#idDgAccount")
                .datagrid({title : '(' + rowData.name + ')角色中的帐号'})
                .datagrid("loadData",data).datagrid("getPager").pagination({
                    layout:['first','prev','manual','next','last']
            });

            $('#idDlGot').datalist({title : '(' + rowData.name + ')角色已获得的权限'});
        }
    }).datagrid("getPager").pagination({
        showRefresh:false
    }); // end of $('#idDgRole').datagrid...

    //------------------------------------------------------------
    // 工具栏操作类
    toolRole = {
        add : function() {
            $('#idDlgRole').form('load', {
                roleId :    '0',
                name :      ''
            }).dialog({title : '添加角色'}).dialog('open');
        },

        remove : function() {
            var rows =  $('#idDgRole').datagrid('getSelections');
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
            var rows =  $('#idDgRole').datagrid('getSelections');
            if (rows.length == 1) {
                $('#idDlgRole').form('load',{
                    roleId :    rows[0].id,
                    name :      rows[0].name
                }).dialog({title : '编辑角色信息'}).dialog('open');
            } else {
                $.messager.alert('警告', '修改必须选中且只能选中一行！！', 'warning');
            }
        },

        reload : function() {
            $('#idDgRole').datagrid('reload');
        },

        inverse : function() {
            $("#idDgRole").inverse();
        }
    }; // end of toolRole = {...

    //------------------------------------------------------------
    // 编辑对话框
    $('#idDlgRole').dialog({
        width : 400,
        title : '修改用户角色',
        modal : true,
        closed : true,
        buttons : [{
            text : '提交',
            iconCls : 'icon-ok'
        },{
            text : '取消',
            iconCls : 'icon-cancel',
            handler : function() {
                $('#idDlgRole').dialog('close').form('reset')
            }
        }]
    }); // end of $('#idDlgRole').dialog...

    //////////////////////////////////////////////////////////////
    // 权限操作 - 帐号分配

    // 列表
    $('#idDgAccount').datagrid({
        title : '角色中的帐号',
        fitColumns: true,
        striped : true, //斑马线
        rownumbers : true,
        checkOnSelect: true,
        pagination : true,
        pagePosition: 'bottom',
        pageSize : 10,
        pageNumber : 1,
        singleSelect : false,
        toolbar : '#idToolAccount',
        //url : 'bgUser_listUser.action',
        columns:[[
            {
                field : 'id',
                title : '编号',
                width : 100,
                checkbox : true
            },
            {
                field : 'loginName',
                title : '登录名',
                width : 100
            },
            {
                field : 'name',
                title : '名称',
                width : 100
            }
        ]]
    }).datagrid("getPager").pagination({
        //showRefresh:false
        layout:['first','prev','manual','next','last']
    }); // end of $('#idDgAccount').datagrid...

    //------------------------------------------------------------
    // 帐号列表工具栏操作类
    toolAccount = {
        add : function() {
            $('#idDlgAccount').form('load', {
                loginName : ''
            }).dialog('open');
        },

        remove : function() {
            var rows =  $('#idDgAccount').datagrid('getSelections');
            if (rows.length > 0) {
                var ids = [];
                for (var i = 0; i < rows.length; i++) {
                    ids.push(rows[i].id);
                }
            } else {
                $.messager.alert('提示', '请选择要移出的帐号！！', 'info');
            }
        },

        inverse : function() {
            $("#idDgAccount").inverse();
        }
    }; // end of toolRole = {...

    //------------------------------------------------------------
    // 增加帐号对话框
    $('#idDlgAccount').dialog({
        width : 400,
        title : '添加帐号到角色',
        modal : true,
        closed : true,
        buttons : [{
            text : '确定',
            iconCls : 'icon-ok'
        },{
            text : '取消',
            iconCls : 'icon-cancel',
            handler : function() {
                $('#idDlgAccount').dialog('close').form('reset')
            }
        }]
    }); // end of $('#idDlgAccount').dialog...

    $('#idDgAccountCandidate').datagrid({
        title : '选择帐号',
        fitColumns: true,
        striped : true, //斑马线
        rownumbers : true,
        checkOnSelect: true,
        pagination : false,
        singleSelect : false,
        //url : 'bgUser_listUser.action',
        columns:[[
            {
                field : 'id',
                title : '编号',
                width : 100,
                checkbox : true
            },
            {
                field : 'loginName',
                title : '登录名',
                width : 100
            },
            {
                field : 'name',
                title : '名称',
                width : 100
            }
        ]]
    }); // end of $('#idDgAccountCandidate').datagrid...

    $('#idBtnSearchAccount').bind('click', function(){
        $("#idDgAccountCandidate").datagrid("loadData",listAccountFound);
    });

    //////////////////////////////////////////////////////////////
    // 权限操作 - 权限分配

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
