module.exports = {
    
    // 存档
    '/archives/': require('../archives/sidebar'),
    // 前端进阶
     '/frontend-addon/': [
        '/frontend-addon/more',
        {
            title: 'Vue',
            collapsable: 'true',
            children: [
                '/frontend-addon/vue/vue',
                '/frontend-addon/vue/code',
            ]
        },
        {
            title: 'React',
            collapsable: 'true',
            children: [
                '/frontend-addon/react/comp',
                '/frontend-addon/react/hooks',
            ]
        },
        {
            title: 'Typescript',
            collapsable: 'true',
            children: [
                '/frontend-addon/typescript/ts'
            ]
        },
    ],
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
    ],
    // 其他的
    // '/the-other/node/': require('../the-other/node/sidebar'),
    // '/the-other/simple-algorithm/': require('../the-other/simple-algorithm/sidebar'),
}