module.exports = [
    {
        text: '首页',
        link: '/'
    },
    {
        text: '归档',
        link: '/'
    },
    {
        text: '前端进阶', 
        link: '/frontend-addon/more',
    },
    {
        text: '存档', link: '/archives/',
		items: [
            {
                text: 'Vue', link: '/archives/vue/'
            },
            {
                text: 'JavaScript', link: '/archives/javascript/'
            },
            {
                text: 'React', link: '/archives/react/'
            },
            {
                text: 'Node.js', link: '/archives/node/'
            },
            {
                text: '算法', link: '/archives/simple-algorithm/'
            }
        ]
    },
    // {
    //     text: '其他的', link: '/the-other/',
    //     items: [
    //         {
    //                 text: 'Node.js', link: '/the-other/node/'
    //         },
    //         {
    //                 text: '算法', link: '/the-other/simple-algorithm/'
    //         },
    //     ]
    // },
    {
        text: '关于生活', 
        link: '/life/Life',
    },
    {
        text: '关于我', 
        link: '/about/',
    },
    {
        text: '工具箱',
        items: [
			{
                text: '在线编辑',
				items: [
					{text: '图片压缩', link: 'https://tinypng.com/'}
				]
            },
			{
                text: '在线服务',
				items: [
					{text: '阿里云', link: 'https://www.aliyun.com/'},
					{text: '腾讯云', link: 'https://cloud.tencent.com/'}
				]
            },
			{
                text: '博客指南',
				items: [
					{text: '掘金', link: 'https://juejin.im/'},
					{text: 'CSDN', link: 'https://blog.csdn.net/'}
				]
            }
        ]
    }
]
