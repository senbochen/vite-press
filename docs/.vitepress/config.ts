import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "阳光灿烂的日子",
  description: "鲨鱼辣椒",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '实例', link: '/guilin' }
    ],

    sidebar: [
      {
        text: '首页',
        items: [
          { text: '桂林阳朔', link: '/guilin' },
          { text: '深圳龙华', link: '/longhua' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
