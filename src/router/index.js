import { createRouter, createWebHashHistory } from 'vue-router'

export const constantRoutes = [
  {
    path: '/',
    redirect: '/dashboard',
    hidden:true
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/layout/index'),
    meta:{title: '首页', icon: 'House',  },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashbord'),
        meta:{title: '首页', icon: 'House', keepAlive: true },
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/layout/index'),
    meta:{title: '关于', icon: 'ChatDotRound'},
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView'),
        meta:{title: '关于', icon: 'dashboard', keepAlive: false },
      },
    ]
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/layout/index'),
    meta:{title: '分类', icon: 'Document', affix: true },
    children: [
      {
        path: 'goods',
        name: 'good',
        component: () => import('@/views/goods'),
        meta:{title: '商品分类', icon: '', keepAlive: true },
      },
      {
        path: 'menu',
        name: 'menu',
        meta: { title: '菜单分类', icon: '', keepAlive: true },
        children: [
          {
            path: 'play',
            name: 'play',
            component: () => import('@/views/play'),
            meta:{title: '运动分类', icon: '', keepAlive: true },
          },
          {
            path: 'menuItem',
            name: 'menuItem',
            component: () => import('@/views/foods'),
            meta:{title: '饮食分类', icon: '', keepAlive: true },
          },
        ]
      },
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
export default router
