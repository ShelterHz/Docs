module.exports = {
    // 其他的
    '/the-other/node/': require('../the-other/node/sidebar'),
    '/the-other/simple-algorithm/': require('../the-other/simple-algorithm/sidebar'),
    
    // 存档
    '/frontend-advanced/': require('../frontend-advanced/sidebar'),
    // '/frontend-advanced/': [
    //     '/frontend-advanced/vue',
    //     '/frontend-advanced/javascript',
    //     {
    //         title: 'react',
    //         collapsable: 'true',
    //         children: [
    //             '/frontend-advanced/react/basic',
    //             '/frontend-advanced/react/advanced',
    //         ]
    //     }
    // ],

    // 前端进阶
    '/frontend-addon/': [
        '/frontend-addon/Web',
        '/frontend-addon/Vscode',
        {
            title: 'JavaScript',
            collapsable: 'true',
            children: [
                '/frontend-addon/js/Date',
                '/frontend-addon/js/Object',
            ]
        }
    ],
    // 前端基础
    
    // 生活
    '/life/': [
        '/life/Life',
        {
            title: '年度计划',
            collapsable: 'true',
            children: [
                '/life/plan/2022'
            ]
        },
        {
            title: '想到哪，写到哪',
            collapsable: 'true',
            children: [
                '/life/diary/2021-11'
            ]
        }
    ]
}