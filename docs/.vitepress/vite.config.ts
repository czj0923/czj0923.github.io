import autoSidebar from './plugins/vite-plugin-auto-sidebar';

export default {
  plugins: [
    // 不需要排序的侧边栏可以交给插件处理
    autoSidebar({
      dir: 'docs',
      ignoreDirList: ['public'],
      includesDirList: ['run', 'trail', 'climbing', 'ride', 'calendar', 'analysis', 'php'],
      navTextMap: {
        calendar: '比赛日历',
        climbing: '笔记',
        ride: '笔记',
        note: '笔记',
        race: '比赛记录',
      }
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  resolve: {
    alias: []
  }
};
