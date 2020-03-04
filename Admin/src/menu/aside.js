// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '文件管理',
    icon: 'file',
    children: [
        { path: '/datasetFiles', title: '数据集管理' ,icon: 'list' },
        { path: '/modelFiles', title: '模型管理' ,icon: 'codiepie' }
    ]
  },
  { path: '/submitTask', title: '提交任务' ,icon: 'edit' },
  {
    title: '任务管理',
    icon: 'calendar',
    children: [
        { path: '/trainTask', title: '训练任务' ,icon: 'h-square' },
        { path: '/evaluteTask', title: '推导任务' ,icon: 'plus' },
    ]
  }
  
]
