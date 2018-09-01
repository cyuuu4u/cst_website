
$(document).ready(function () {
    //------------------------------------------------------------
    // 数据网格
    $('#idDgDownloadIsn').datagrid({
        title : '芯片测试结果列表',
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
        //toolbar : '#idToolDownloadIsn',
        //url : 'bgUser_listUser.action',
        data : listDownloadIsn,
        columns:[[
            {
                field : 'id',
                title : 'ID',
                width : 5,
                hidden: true
            },
            {
                field : 'schemerName',
                title : '授权方案公司',
                width : 120
            },
            {
                field : 'quantity',
                title : '内控码数量',
                width : 80
            },
            {
                field : 'authorizeTime',
                title : '授权时间',
                width : 120
            },
            {
                field : 'downloadTime',
                title : '最近下载时间',
                width : 120
            },
            {
                field:'action',title:'操作',width:60,align:'center',
                formatter:function(value,row,index){
                    return '<a href="javascript:void(0)" onclick="toolDownloadIsn.download(this)">下载</a> ';
                }
            }
        ]]
        //rownumbers : false,
    }).datagrid("getPager").pagination({
        showRefresh:false
    }); // end of $('#idDgDownloadIsn').datagrid...

    //------------------------------------------------------------
    // 工具栏操作类
    toolDownloadIsn = {
        download : function() {
            $('#idDgDownloadIsn').datagrid('reload');
        }
    }; // end of toolDownloadIsn = {...

});
