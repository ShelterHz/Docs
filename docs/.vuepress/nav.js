module.exports = [
    {
        text: '关于我', link: '/about/',
    },
    {
        text: '前端修炼', link: '/frontend-basic/',
        items: [
            {
                    text: 'vue', link: '/frontend-basic/vue/'
            },
            {
                    text: 'JavaScript', link: '/frontend-basic/JavaScript/'
            }
        ]
    },
    {
        text: '前端进阶', link: '/frontend-advanced/',
		items: [
            {
                text: '工具类', link: '/frontend-advanced/tools/'
            },
            {
                text: '文章', link: '/frontend-advanced/documentss/'
            }
        ]
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
