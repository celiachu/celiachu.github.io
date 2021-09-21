module.exports = {
    base: '/blog-demo/',
    title: 'Celiachu',
    description: 'Vuepress blog demo',
    // 导航栏
    themeConfig:{
        // github仓库地址
        repo: 'https://github.com/xxxxxxx/blog-demo',
	    // 自定义仓库链接文字。
	    repoLabel: 'My GitHub',

        logo : '/assets/img/logo.svg',
	  	nav: [
	  		{ text: 'Home', link: '/' },
	  		{ text: 'FirstBlog', link: '/blog/FirstBlog.md' }
          ]
        }
  }