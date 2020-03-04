// layout
import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      {
        path: 'index',
        name: 'index',
        meta: { meta, title: '首页' },
        component: () => import('@/pages/index')
      },
      {
        path: '/modelFiles',
        name: 'modelFiles',
        component: () => import('@/pages/files/modelFiles'),
        meta: { meta, title: '模型管理' }
      },
      {
        path: '/datasetFiles',
        name: 'datasetFiles',
        component: () => import('@/pages/files/datasetFiles'),
        meta: { meta, title: '数据集管理' }
      },
      {
        path: '/submitTask',
        name: 'submitTask',
        component: () => import('@/pages/submit/submitTask'),
        meta: { meta, title: '提交任务' }
      },
      {
        path: '/trainTask',
        name: 'trainTask',
        component: () => import('@/pages/tasks/trainTask'),
        meta: { meta, title: '训练任务' }
      },
      {
        path: '/evaluteTask',
        name: 'evaluteTask',
        component: () => import('@/pages/tasks/evaluteTask'),
        meta: { meta, title: '推导任务' }
      }
    ]
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登陆
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  // 404
  {
    path: '*',
    name: '404',
    component: () => import('@/pages/error-page-404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
