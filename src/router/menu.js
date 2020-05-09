const menuList = [{
    title: "首页",
    icon: "ios-home",
    key: "100",
    sub: [{
        title: "系统首页",
        url: "/home",
        key: "1010",
        sub: [{
            title: "数据中心",
            key: "1011",
        }]
    }]
},{
    title: "修改密码",
    icon: "android-settings",
    key: "200",
    sub: [{
        title: "修改密码",
        url: "/home",
        key: "210",
        sub: []
    }]
},{
    title: "数据中心",
    icon: "android-settings",
    key: "300",
    sub: [{
        title: "数据中心",
        url: "/home",
        key: "310",
        sub: []
    }]
},{
    title: "用户管理",
    icon: "android-settings",
    key: "400",
    sub: [{
        title: "用户管理",
        url: "/users",
        key: "410",
        sub: [{
            title: "查看",
            key: "411",
        },{
            title: "封禁",
            key: "412",
        }]
    }]
},{
    title: "预设网站管理",
    icon: "android-settings",
    key: "500",
    sub: [{
        title: "预设网站管理",
        url: "/presetweb",
        key: "510",
        sub: [{
            title: "新增",
            key: "511",
        },{
            title: "修改",
            key: "512",
        },{
            title: "删除",
            key: "513",
        }]
    }]
},{
    title: "交易商名单管理",
    icon: "android-settings",
    key: "600",
    sub: [{
        title: "交易商名单管理",
        url: "/commpanies",
        key: "610",
        sub: [{
            title: "修改",
            key: "611",
        },{
            title: "删除",
            key: "612",
        },{
            title: "自动同步",
            key: "613",
        },{
            title: "自动测速加速",
            key: "614",
        }]
    }]
},{
    title: "加速节点管理",
    icon: "android-settings",
    key: "700",
    sub: [{
        title: "加速节点管理",
        url: "/quickennode",
        key: "710",
        sub: [{
            title: "新增",
            key: "711",
        },{
            title: "修改",
            key: "712",
        },{
            title: "删除",
            key: "713",
        }]
    }]
},{
    title: "网址导航管理",
    icon: "android-settings",
    key: "800",
    sub: [{
        title: "网址导航管理",
        url: "/guideweb",
        key: "810",
        sub: [{
            title: "新增",
            key: "811",
        },{
            title: "修改",
            key: "812",
        },{
            title: "删除",
            key: "813",
        }]
    },{
        title: "导航分类管理",
        url: "/guidesort",
        key: "820",
        sub: [{
            title: "新增",
            key: "821",
        },{
            title: "修改",
            key: "822",
        },{
            title: "删除",
            key: "823",
        }]
    }]
},{
    title: "搜索热词管理",
    icon: "android-settings",
    key: "800",
    sub: [{
        title: "搜索热词列表",
        url: "/hotwords",
        key: "810",
        sub: [{
            title: "新增",
            key: "811",
        },{
            title: "修改",
            key: "812",
        },{
            title: "删除",
            key: "813",
        }]
    }]
},{
    title: "后台用户管理",
    icon: "android-settings",
    key: "900",
    sub: [{
        title: "后台用户列表",
        url: "/backusers",
        key: "910",
        sub: [{
            title: "新增",
            key: "911",
        },{
            title: "修改",
            key: "912",
        },{
            title: "删除",
            key: "913",
        },{
            title: "重置密码",
            key: "914",
        }]
    }]
},{
    title: "权限管理",
    icon: "person",
    key: "200",
    sub: [{
        title: "角色权限管理",
        url: "/permission/roles",
        key: "2010",
        sub: [{
            title: "新增",
            key: "2011",
        },{
            title: "修改",
            key: "2012",
        },{
            title: "删除",
            key: "2013",
        },{
            title: "权限配置",
            key: "2014",
        }]
    },{
        title: "用户管理",
        url: "/permission/users",
        key: "2020",
        sub: [{
            title: "查看",
            key: "2021",
        },{
            title: "封禁",
            key: "2022",
        }]
    },{
        title: "后台用户管理",
        url: "/permission/backusers",
        key: "2030",
        sub: [{
            title: "新增",
            key: "2031",
        },{
            title: "修改",
            key: "2032",
        },{
            title: "删除",
            key: "2033",
        },{
            title: "重置密码",
            key: "2034",
        }]
    },{
        title: "搜索热词管理",
        url: "/permission/hotwords",
        key: "2040",
        sub: [{
            title: "新增",
            key: "2041",
        },{
            title: "修改",
            key: "2042",
        },{
            title: "删除",
            key: "2043",
        }]
    },{
        title: "预设网站配置",
        url: "/permission/settingweb",
        key: "2050",
        sub: [{
            title: "新增",
            key: "2051",
        },{
            title: "修改",
            key: "2052",
        },{
            title: "删除",
            key: "2053",
        }]
    },{
        title: "网站导航管理",
        url: "/permission/guideweb",
        key: "2060",
        sub: [{
            title: "新增",
            key: "2061",
        },{
            title: "修改",
            key: "2062",
        },{
            title: "删除",
            key: "2063",
        }]
    },{
        title: "导航分类管理",
        url: "/permission/guidesort",
        key: "2070",
        sub: [{
            title: "新增",
            key: "2071",
        },{
            title: "修改",
            key: "2072",
        },{
            title: "删除",
            key: "2073",
        }]
    },{
        title: "交易商名单管理",
        url: "/permission/commpanies",
        key: "2080",
        sub: [{
            title: "修改",
            key: "2081",
        },{
            title: "删除",
            key: "2082",
        },{
            title: "自动同步",
            key: "2083",
        },{
            title: "自动测速加速",
            key: "2084",
        }]
    },{
        title: "意见反馈管理",
        url: "/permission/feedback",
        key: "2090",
        sub: [{
            title: "详情",
            key: "2091",
        },{
            title: "处理",
            key: "2092",
        }]
    },{
        title: "误报申诉管理",
        url: "/permission/feedback",
        key: "2120",
        sub: [{
            title: "详情",
            key: "2121",
        },{
            title: "处理",
            key: "2122",
        }]
    },{
        title: "数据中心",
        url: "/permission/datacenter",
        key: "2100",
        sub: []
    },{
        title: "后台配置更新",
        url: "/permission/backsetting",
        key: "2110",
        sub: []
    }]
},{
    title: "误报申诉管理",
    icon: "android-settings",
    key: "1000",
    sub: [{
        title: "误报申诉管理",
        url: "/feedback",
        key: "10010",
        sub: [{
            title: "详情",
            key: "10011",
        },{
            title: "处理",
            key: "10012",
        }]
    }]
},{
    title: "后台配置管理",
    icon: "android-settings",
    key: "1100",
    sub: [{
        title: "后台配置管理",
        url: "/backsetting",
        key: "11100",
        sub: [{
            title: "编辑",
            key: "11101",
        },{
            title: "删除",
            key: "11102",
        }]
    }]
}];

export default menuList;