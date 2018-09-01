//------------------------------------------------------------------
// 帐号
var listAccount = {
    total: 2,
    rows: [
        {
            id: "1",
            status: "正常",
            loginName: "143600",
            name: "蔡绍滨",
            kind: "院长",
            phone: "13659298378",
            email: "zhoudafu@163.com",
            loginTime: "2016-08-19 00:02:33"
        },
        {
            id: "2",
            status: "禁用",
            loginName: "143601",
            name: "杜吉祥",
            kind: "副院长",
            phone: "13659398332",
            email: "tom@163.com",
            loginTime: "2017-01-11 20:02:18"
        },
        {
            id: "3",
            status: "正常",
            loginName: "143602",
            name: "缑锦",
            kind: "副院长",
            phone: "13659398332",
            email: "tom@163.com",
            loginTime: "2017-03-11 21:32:35"
        }
    ]
};

var listRoleGot = [
    {
        code: '1',
        name: "基础资料管理员"
    },
    {
        code: '2',
        name: "方案设计公司"
    },
    {
        code: '3',
        name: "客户公司"
    }
];


var listRoleRemaining = [
    {
        code: '4',
        name: "政府人员"
    },
    {
        code: '5',
        name: "PBC板供应商"
    },
    {
        code: '6',
        name: "订单管理员"
    }
];

var listPrivilegeGot = [
    {
        code: '1',
        name: "帐号管理"
    },
    {
        code: '2',
        name: "角色管理"
    },
    {
        code: '3',
        name: "更改我的密码"
    }
];

listPrivilegeRemaining = [
    {
        code: '4',
        name: "方案公司管理"
    },
    {
        code: '5',
        name: "客户公司管理"
    },
    {
        code: '6',
        name: "PCB板供应商管理"
    },
    {
        code: '7',
        name: "方案管理"
    },
    {
        code: '8',
        name: "客户下单"
    },
    {
        code: '9',
        name: "方案公司开单"
    },
    {
        code: '10',
        name: "我的订单（客户）"
    },
    {
        code: '11',
        name: "我的订单（方案公司）"
    },
    {
        code: '12',
        name: "综合统计"
    },
    {
        code: '13',
        name: "芯片测试结果"
    },
    {
        code: '14',
        name: "整机测试结果"
    },
    {
        code: '15',
        name: "参数设置"
    },
    {
        code: '16',
        name: "备份与恢复"
    },
    {
        code: '17',
        name: "操作日志"
    }
];

//------------------------------------------------------------------
// 角色

var listRole = {
    total: 2,
    rows: [
        {
            id: "1",
            name: "PCBA测试员"
        },
        {
            id: "2",
            name: "方案公司"
        }
    ]
};

var listAccountInRole1 = {
    total: 2,
    rows: [
        {
            id: '1',
            loginName: 'zhangsan',
            name: "张三"
        },
        {
            id: '2',
            loginName: 'lisi',
            name: "李四"
        }
    ]
};

var listAccountInRole2 = {
    total: 3,
    rows: [
        {
            id: '3',
            loginName: 'tom',
            name: "汤姆"
        },
        {
            id: '4',
            loginName: 'lily',
            name: "丽丽"
        },
        {
            id: '5',
            loginName: 'alice',
            name: "艾丽丝"
        }
    ]
};

var listAccountFound = {
    total: 3,
    rows: [
        {
            id: '7',
            loginName: 'angel',
            name: "安吉尔"
        },
        {
            id: '8',
            loginName: 'darwin',
            name: "达文"
        },
        {
            id: '9',
            loginName: 'machle',
            name: "迈克"
        }
    ]
};

//------------------------------------------------------------------
// 方案公司
var listSchemer = {
    total: 2,
    rows: [
        {
            id: "1",
            status: "正常",
            loginName: "cliff",
            name: "领丰对讲机电子设计公司",
            quantity: 3000,
            linkman: "罗成",
            phone: "13659298378",
            email: "luocheng@163.com",
            loginTime: "2016-08-19 00:02:33"
        },
        {
            id: "2",
            status: "禁用",
            loginName: "tom",
            name: "远通电子设计公司",
            quantity: 20000,
            linkman: "秦琼",
            phone: "13659398332",
            email: "qingqiong@163.com",
            loginTime: "2017-01-11 20:02:18"
        }
    ]
};

//------------------------------------------------------------------
// 客户
var listCustomer = {
    total: 2,
    rows: [
        {
            id: "1",
            status: "正常",
            loginName: "cliff",
            name: "宝锋电子公司",
            quantity: 28000,
            linkman: "花荣",
            phone: "13659298378",
            email: "huarong@163.com",
            loginTime: "2016-08-19 00:02:33"
        },
        {
            id: "2",
            status: "禁用",
            loginName: "tom",
            name: "巨树电子有限公司",
            quantity: 5000,
            linkman: "关胜",
            phone: "13659398332",
            email: "guansheng@163.com",
            loginTime: "2017-01-11 20:02:18"
        }
    ]
};

//------------------------------------------------------------------
// PCB板供应商
var listPcbProvider = {
    total: 2,
    rows: [
        {
            id: "1",
            status: "正常",
            loginName: "chengyuan",
            name: "程远电路系统有限公司",
            quantity: 4000,
            linkman: "林消",
            phone: "13659298378",
            email: "linxiao@163.com",
            loginTime: "2016-08-19 00:02:33"
        },
        {
            id: "2",
            status: "禁用",
            loginName: "gucheng",
            name: "顾成电路系统有限公司",
            quantity: 30000,
            linkman: "顾成",
            phone: "13659398332",
            email: "gucheng@163.com",
            loginTime: "2017-01-11 20:02:18"
        }
    ]
};

//------------------------------------------------------------------
// 方案
var listScheme = {
    total: 2,
    rows: [
        {
            id: '1',
            name: 'v1.6机型蓝牙',
            modelName: 'uvf-3-1.02',
            brief: "针对v1.6机型具有蓝牙功能。"
        },
        {
            id: '2',
            name: 'v1.5简化',
            modelName: 'uav-2-3.01',
            brief: "针对v1.5机型简化版。"
        }
    ]
};

var listModel = {
    "total": 10, "rows": [
        {"code": "FI-SW-01", "name": "Koi"},
        {"code": "K9-DL-01", "name": "Dalmation"},
        {"code": "RP-SN-01", "name": "Rattlesnake"},
        {"code": "RP-SN-01", "name": "Rattlesnake"},
        {"code": "RP-LI-02", "name": "Iguana"},
        {"code": "FL-DSH-01", "name": "Manx"},
        {"code": "FL-DSH-01", "name": "Manx"},
        {"code": "FL-DLH-02", "name": "Persian"},
        {"code": "FL-DLH-02", "name": "Persian"},
        {"code": "AV-CB-01", "name": "Amazon Parrot"}
    ]
};

var listSchemeVersion1 = {
    total: 2,
    rows: [
        {
            id: '1',
            versionNo: '1.6.1',
            filename: 'v1.6.1.bin',
            brief: "初版。"
        },
        {
            id: '2',
            versionNo: '1.6.2',
            filename: '1.6.2',
            brief: "完整版。"
        }
    ]
};

var listSchemeVersion2 = {
    total: 3,
    rows: [
        {
            id: '1',
            versionNo: '1.5.1',
            filename: 'v1.5.1.bin',
            brief: "初版。"
        },
        {
            id: '2',
            versionNo: '1.5.2',
            filename: '1.5.2',
            brief: "测试版。"
        },
        {
            id: '2',
            versionNo: '1.5.3',
            filename: '1.5.3',
            brief: "完整版。"
        }
    ]
};

//------------------------------------------------------------------
// 客户下单

var listComboSchemers = [{
    "id":1,
    "name":"科缔恒",
    "selected":true
},{
    "id":2,
    "name":"斯力达"
},{
    "id":3,
    "name":"学布"
},{
    "id":4,
    "name":"匀电"
},{
    "id":5,
    "name":"顺达电子"
}];

var listMakeOrderItem = {
    total: 3,
    rows: [
        {
            id: "1",
            schemeId: "1",
            schemeName: "v1.6机型蓝牙",
            versionName: "1.6.1",
            modelName: "UAF-4.4",
            quantity: 3000
        },
        {
            id: "2",
            schemeId: "2",
            schemeName: "v1.5简化",
            versionName: "1.5.3",
            modelName: "VAF-2.3",
            quantity: 4000
        },
        {
            id: "3",
            schemeId: "2",
            schemeName: "v2.1精简",
            versionName: "2.1.3",
            modelName: "VAF-2.0",
            quantity: 2000
        }
    ],
    "footer":[{schemeName:"总计",quantity:9000}]
};

var listComboSchemes = [{
    "id":1,
    "name":"v1.6机型蓝牙",
    "selected":true
},{
    "id":2,
    "name":"v1.5简化"
}];

//------------------------------------------------------------------
// 方案公司开单
var listOrder = {
    total: 2,
    rows: [
        {
            id: '1',
            customerId: '1',
            customerName: '宝锋',
            batchNo: '20170218',
            quantity: 9000,
            openQuantity: 9000,
            createTime: '2017-02-18 13:00:32'
        },
        {
            id: '2',
            customerId: '1',
            customerName: '迅同',
            batchNo: '20170302',
            quantity: 11000,
            openQuantity: 0,
            createTime: '2017-03-02 10:03:02'
        }
    ],
    "footer":[{customerName:"总计",quantity:20000,openQuantity: 9000}]
};

var listOpenOrderItem1 = {
    total: 3,
    rows: [
        {
            id: "1",
            schemeId: "1",
            schemeName: "v1.6机型蓝牙",
            versionName: "1.6.1",
            modelName: "UAF-4.4",
            quantity: 3000,
            openQuantity: 3000
        },
        {
            id: "2",
            schemeId: "2",
            schemeName: "v1.5简化",
            versionName: "1.5.3",
            modelName: "VAF-2.3",
            quantity: 4000,
            openQuantity: 3000
        },
        {
            id: "3",
            schemeId: "2",
            schemeName: "v2.1精简",
            versionName: "2.1.3",
            modelName: "VAF-2.0",
            quantity: 2000,
            openQuantity: 2000
        }
    ],
    "footer":[{schemeName:"总计",quantity:9000,openQuantity:9000,action:''}]
};

var listOpenOrderItem2 = {
    total: 2,
    rows: [
        {
            id: "1",
            schemeId: "1",
            schemeName: "v1.6机型蓝牙",
            versionName: "1.6.1",
            modelName: "UAF-4.4",
            quantity: 5000,
            openQuantity: 0
        },
        {
            id: "2",
            schemeId: "2",
            schemeName: "v1.5简化",
            versionName: "1.5.3",
            modelName: "VAF-2.3",
            quantity: 6000,
            openQuantity: 0
        }
    ],
    "footer":[{schemeName:"总计",quantity:11000,openQuantity:0,action:''}]
};

//------------------------------------------------------------------
// 我的订单(客户)

var listMyOrder = {
    total: 2,
    rows: [
        {
            id: '1',
            status: '已开单',
            batchNo: '20170218',
            quantity: 9000,
            createTime: '2017-02-18 13:00:32',
            openQuantity: 9000,
            openOrderTime: '2017-03-01 10:00:32'
        },
        {
            id: '2',
            status: '待开单',
            batchNo: '20170302',
            quantity: 11000,
            createTime: '2017-03-02 10:03:02',
            openQuantity: 0,
            openOrderTime: '2017-03-03 11:02:23'
        }
    ],
    "footer":[{status:"总计",quantity:20000,openQuantity: 9000}]
};

var listOpenMyOrderItem1 = {
    total: 3,
    rows: [
        {
            id: "1",
            schemeId: "1",
            schemeName: "v1.6机型蓝牙",
            versionName: "1.6.1",
            modelName: "UAF-4.4",
            quantity: 3000,
            openQuantity: 3000
        },
        {
            id: "2",
            schemeId: "2",
            schemeName: "v1.5简化",
            versionName: "1.5.3",
            modelName: "VAF-2.3",
            quantity: 4000,
            openQuantity: 3000
        },
        {
            id: "3",
            schemeId: "2",
            schemeName: "v2.1精简",
            versionName: "2.1.3",
            modelName: "VAF-2.0",
            quantity: 2000,
            openQuantity: 2000
        }
    ],
    "footer":[{schemeName:"总计",quantity:9000,openQuantity:9000,action:''}]
};

var listOpenMyOrderItem2 = {
    total: 2,
    rows: [
        {
            id: "1",
            schemeId: "1",
            schemeName: "v1.6机型蓝牙",
            versionName: "1.6.1",
            modelName: "UAF-4.4",
            quantity: 5000,
            openQuantity: 0
        },
        {
            id: "2",
            schemeId: "2",
            schemeName: "v1.5简化",
            versionName: "1.5.3",
            modelName: "VAF-2.3",
            quantity: 6000,
            openQuantity: 0
        }
    ],
    "footer":[{schemeName:"总计",quantity:11000,openQuantity:0,action:''}]
};

//------------------------------------------------------------------
// 我的订单(方案公司)
var listSchemerOrder = {
    total: 2,
    rows: [
        {
            id: '1',
            customerId: '1',
            customerName: '宝锋',
            batchNo: '20170218',
            status: '已确认',
            quantity: 9000,
            createTime: '2017-02-18 13:00:32',
            openQuantity: 9000,
            openTime: '2017-03-01 13:30:39'
        },
        {
            id: '2',
            customerId: '1',
            customerName: '迅同',
            batchNo: '20170302',
            status: '待确认',
            quantity: 11000,
            createTime: '2017-03-02 10:03:02',
            openQuantity: 0,
            openTime: '2017-03-03 14:30:49'
        }
    ],
    "footer":[{customerName:"总计",quantity:20000,openQuantity: 9000}]
};

var listOpenSchemerOrderItem1 = {
    total: 3,
    rows: [
        {
            id: "1",
            schemeId: "1",
            schemeName: "v1.6机型蓝牙",
            versionName: "1.6.1",
            modelName: "UAF-4.4",
            quantity: 3000,
            openQuantity: 3000
        },
        {
            id: "2",
            schemeId: "2",
            schemeName: "v1.5简化",
            versionName: "1.5.3",
            modelName: "VAF-2.3",
            quantity: 4000,
            openQuantity: 3000
        },
        {
            id: "3",
            schemeId: "2",
            schemeName: "v2.1精简",
            versionName: "2.1.3",
            modelName: "VAF-2.0",
            quantity: 2000,
            openQuantity: 2000
        }
    ],
    "footer":[{schemeName:"总计",quantity:9000,openQuantity:9000,action:''}]
};

var listOpenSchemerOrderItem2 = {
    total: 2,
    rows: [
        {
            id: "1",
            schemeId: "1",
            schemeName: "v1.6机型蓝牙",
            versionName: "1.6.1",
            modelName: "UAF-4.4",
            quantity: 5000,
            openQuantity: 0
        },
        {
            id: "2",
            schemeId: "2",
            schemeName: "v1.5简化",
            versionName: "1.5.3",
            modelName: "VAF-2.3",
            quantity: 6000,
            openQuantity: 0
        }
    ],
    "footer":[{schemeName:"总计",quantity:11000,openQuantity:0,action:''}]
};

var listComboPcbProvider = [{
    "id":1,
    "name":"程远电路系统有限公司",
    "selected":true
},{
    "id":2,
    "name":"顾成电路系统有限公司"
}];

//--------------------------------------------------------------
// 下载内控码
var listDownloadIsn = {
    total: 2,
    rows: [
        {
            id: "1",
            schemerName: "科缔恒",
            quantity: 6000,
            authorizeTime: '2017-03-02 15:30:33',
            downloadTime: '2017-03-02 15:30:33'
        },
        {
            id: "2",
            schemerName: "科缔恒",
            quantity: 5500,
            authorizeTime: '2017-02-16 10:30:55',
            downloadTime: '2017-02-17 12:36:12'
        }
    ]
};

//--------------------------------------------------------------
// 综合统计
var listPeriod = [{
    "id":1,
    "name":"按天",
    "selected":true
},{
    "id":2,
    "name":"按月"
},{
    "id":3,
    "name":"按年"
}];

var listProductType = [{
    "id":1,
    "name":"芯片",
    "selected":true
},{
    "id":2,
    "name":"整机"
}];

var listShipmentChip1 = {
    total: 12,
    rows: [
        {
            product: '芯片',
            shipmentTime: '2017-03-07',
            quantity: 3000
        },
        {
            product: '芯片',
            shipmentTime: '2017-03-06',
            quantity: 3200
        },
        {
            product: '芯片',
            shipmentTime: '2017-03-07',
            quantity: 3000
        },
        {
            product: '芯片',
            shipmentTime: '2017-03-06',
            quantity: 3200
        },
        {
            product: '芯片',
            shipmentTime: '2017-03-05',
            quantity: 3000
        },
        {
            product: '芯片',
            shipmentTime: '2017-03-04',
            quantity: 3200
        },
        {
            product: '芯片',
            shipmentTime: '2017-03-03',
            quantity: 3000
        },
        {
            product: '芯片',
            shipmentTime: '2017-03-02',
            quantity: 3100
        },
        {
            product: '芯片',
            shipmentTime: '2017-03-01',
            quantity: 3000
        },
        {
            product: '芯片',
            shipmentTime: '2017-02-28',
            quantity: 3200
        },
        {
            product: '芯片',
            shipmentTime: '2017-02-27',
            quantity: 3200
        },
        {
            product: '芯片',
            shipmentTime: '2017-02-26',
            quantity: 3300
        }
    ],
    "footer":[{product:"总计",quantity:37400}]
};

var listShipmentChip2 = {
    total: 4,
    rows: [
        {
            product: '芯片',
            shipmentTime: '2017年3月',
            quantity: 63000
        },
        {
            product: '芯片',
            shipmentTime: '2017年2月',
            quantity: 60000
        },
        {
            product: '芯片',
            shipmentTime: '2017年1月',
            quantity: 51000
        },
        {
            product: '芯片',
            shipmentTime: '2016年12月',
            quantity: 52000
        }
    ],
    "footer":[{product:"总计",quantity:307000}]
};

var listShipmentChip3 = {
    total: 2,
    rows: [
        {
            product: '芯片',
            shipmentTime: '2017年',
            quantity: 2500000
        },
        {
            product: '芯片',
            shipmentTime: '2016年',
            quantity: 2000000
        }
    ],
    "footer":[{product:"总计",quantity:4500000}]
};

var listShipmentInterphone1 = {
    total: 12,
    rows: [
        {
            product: '整机',
            shipmentTime: '2017-03-07',
            quantity: 4500
        },
        {
            product: '整机',
            shipmentTime: '2017-03-06',
            quantity: 4300
        },
        {
            product: '整机',
            shipmentTime: '2017-03-07',
            quantity: 4000
        },
        {
            product: '整机',
            shipmentTime: '2017-03-06',
            quantity: 4100
        },
        {
            product: '整机',
            shipmentTime: '2017-03-05',
            quantity: 4200
        },
        {
            product: '整机',
            shipmentTime: '2017-03-04',
            quantity: 4200
        },
        {
            product: '整机',
            shipmentTime: '2017-03-03',
            quantity: 3900
        },
        {
            product: '整机',
            shipmentTime: '2017-03-02',
            quantity: 4300
        },
        {
            product: '整机',
            shipmentTime: '2017-03-01',
            quantity: 4400
        },
        {
            product: '整机',
            shipmentTime: '2017-02-28',
            quantity: 3900
        },
        {
            product: '整机',
            shipmentTime: '2017-02-27',
            quantity: 3800
        },
        {
            product: '整机',
            shipmentTime: '2017-02-26',
            quantity: 3800
        }
    ],
    "footer":[{product:"总计",quantity:49400}]
};

var listShipmentInterphone2 = {
    total: 4,
    rows: [
        {
            product: '整机',
            shipmentTime: '2017年3月',
            quantity: 78000
        },
        {
            product: '整机',
            shipmentTime: '2017年2月',
            quantity: 80000
        },
        {
            product: '整机',
            shipmentTime: '2017年1月',
            quantity: 83000
        },
        {
            product: '整机',
            shipmentTime: '2016年12月',
            quantity: 79000
        }
    ],
    "footer":[{product:"总计",quantity:320000}]
};

var listShipmentInterphone3 = {
    total: 2,
    rows: [
        {
            product: '整机',
            shipmentTime: '2017年',
            quantity: 3500000
        },
        {
            product: '整机',
            shipmentTime: '2016年',
            quantity: 3400000
        }
    ],
    "footer":[{product:"总计",quantity:6900000}]
};

var listPeriodOrder = [{
    "id":1,
    "name":"按月",
    "selected":true
},{
    "id":2,
    "name":"按年"
}];

var listStatisticOrder1 = {
    total: 4,
    rows: [
        {
            customerName: '宝锋',
            schemerName: '科缔恒',
            orderTime: '2017年3月',
            quantity: 85000
        },
        {
            customerName: '宝锋',
            schemerName: '科缔恒',
            orderTime: '2017年2月',
            quantity: 85000
        },
        {
            customerName: '宝锋',
            schemerName: '科缔恒',
            orderTime: '2017年1月',
            quantity: 85000
        },
        {
            customerName: '宝锋',
            schemerName: '科缔恒',
            orderTime: '2016年12月',
            quantity: 90000
        }
    ],
    "footer":[{customerName:"总计",quantity:345000}]
};

var listStatisticOrder2 = {
    total: 2,
    rows: [
        {
            customerName: '宝锋',
            schemerName: '科缔恒',
            orderTime: '2017年',
            quantity: 195000
        },
        {
            customerName: '宝锋',
            schemerName: '科缔恒',
            orderTime: '2016年',
            quantity: 185000
        }
    ],
    "footer":[{customerName:"总计",quantity:380000}]
};

//--------------------------------------------------------------
// 芯片测试结果

var listChipTest = {
    total: 3,
    rows: [
        {
            id: "1",
            isn: "FA82209",
            result: "pass",
            testTime: "2017-03-06 14:02:32",
            postWeldOrder: "201702001",
            postWeldLine: "后焊",
            assembleOrder: "2016110067",
            assembleLine: "对讲机组装4线"
        },
        {
            id: "2",
            isn: "FA82432",
            result: "pass",
            testTime: "2017-03-06 14:03:01",
            postWeldOrder: "201702001",
            postWeldLine: "后焊",
            assembleOrder: "2016110067",
            assembleLine: "对讲机组装4线"
        },
        {
            id: "3",
            isn: "FA83145",
            result: "pass",
            testTime: "2017-03-06 14:03:32",
            postWeldOrder: "201702001",
            postWeldLine: "后焊",
            assembleOrder: "2016110067",
            assembleLine: "对讲机组装4线"
        }
    ]
};

//--------------------------------------------------------------
// 芯片测试结果

var listInterphoneTest = {
    total: 3,
    rows: [
        {
            id: "1",
            isn: "FA82209",
            sn: "165HTCL703",
            weight: "564.5",
            result: "pass",
            testTime: "2017-03-06 14:02:32"
        },
        {
            id: "2",
            isn: "FA82306",
            sn: "165HTCL833",
            weight: "563.5",
            result: "pass",
            testTime: "2017-03-06 14:12:31"
        },
        {
            id: "3",
            isn: "FA82409",
            sn: "165HTCL822",
            weight: "568.3",
            result: "pass",
            testTime: "2017-03-06 14:32:11"
        }
    ]
};

//--------------------------------------------------------------
// 操作日志

var listLog = {
    total: 3,
    rows: [
        {
            id: "1",
            operator: "zhangsan",
            op: "添加",
            object: "订单",
            loginTime: "2017-03-06 14:02:32"
        },
        {
            id: "2",
            operator: "lisi",
            op: "删除",
            object: "客户",
            loginTime: "2017-03-03 12:00:32"
        },
        {
            id: "3",
            operator: "wangwu",
            op: "修改",
            object: "订单",
            loginTime: "2017-03-03 23:50:33"
        }
    ]
};

//--------------------------------------------------------------
// 综合统计
var listModel1 = [{
    "id":1,
    "name":"教学工作",
    "selected":true
},{
    "id":2,
    "name":"院务工作"
},{
    "id":3,
    "name":"学术科研"
},{
    "id":4,
    "name":"研究生教学"
}];

var listModel11 = [{
    "id":1,
    "name":"教学动态",
    "selected":true
},{
    "id":2,
    "name":"教学计划"
},{
    "id":3,
    "name":"教学研究"
}];

var listModel12 = [{
    "id":1,
    "name":"学院动态",
    "selected":true
},{
    "id":2,
    "name":"学院发文"
},{
    "id":3,
    "name":"学子风采"
},{
    "id":4,
    "name":"就业信息"
}];

var listModel13 = [{
    "id":1,
    "name":"科研动态",
    "selected":true
}];

var listModel14 = [{
    "id":1,
    "name":"研究生动态",
    "selected":true
},{
    "id":2,
    "name":"招生信息"
}];