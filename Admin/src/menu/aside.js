// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '文件管理',
    icon: 'file',
    children: [
        { path: '/goodsSearch', title: '数据集管理' ,icon: 'list' },
        { path: '/goodsCategory', title: '模型管理' ,icon: 'codiepie' }
    ]
  },
  { path: '/marketHome', title: '提交任务' ,icon: 'edit' },
  {
    title: '任务管理',
    icon: 'calendar',
    children: [
        { path: '/marketHome', title: '训练任务' ,icon: 'h-square' },
        { path: '/marketHome', title: '推导任务' ,icon: 'plus' },
    ]
  }
  
]
