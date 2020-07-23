const initCascaderArr = [
    {
        value: 'zhejiang', // 代码获取的实际内容
        label: 'Zhejiang', // 页面显示的内容
        code: 'zhejiangCode', // 代码获取的实际内容
        name: 'ZhejiangName', // 页面显示的内容
        items: [
            // children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                code: 'hangzhouCode',
                name: 'HangzhouName'

            },
        ]
    }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        code: 'jiangsuCode',
        name: 'JiangsuName',
        items: [
            // children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                code: 'nanjingCode',
                name: 'NanjingName'

            },
        ]
    },
];
export {
    initCascaderArr
}

//
