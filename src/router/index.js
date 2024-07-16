import { createRouter, createWebHashHistory } from 'vue-router'

export const constantRoutes = [
  {
    path: '/',
    redirect: '/dashbord',
    hidden:true
  },
  {
    path: '/dashbord',
    name: 'dashbord',
    component: () => import('@/layout/index.vue'),
    meta:{title: '首页', icon: 'House', affix: true },
    children: [
      {
        path: '/dashbord',
        name: 'dashbord',
        component: () => import('@/views/dashbord.vue'),
        meta:{title: '首页', icon: 'House', affix: true },
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/layout/index.vue'),
    meta:{title: '关于', icon: 'ChatDotRound', affix: true },
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue'),
        meta:{title: '关于', icon: 'dashboard', affix: true },
      },
    ]
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/layout/index.vue'),
    meta:{title: '分类', icon: 'Document', affix: true },
    children: [
      {
        path: 'goods',
        name: 'good',
        component: () => import('@/views/AboutView.vue'),
        meta:{title: '商品分类', icon: '', affix: true },
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/AboutView.vue'),
        meta: { title: '菜单分类', icon: '', affix: true },
        children: [
          {
            path: 'play',
            name: 'play',
            component: () => import('@/views/AboutView.vue'),
            meta:{title: '运动分类', icon: '', affix: true },
          },
          {
            path: 'menuItem',
            name: 'menuItem',
            component: () => import('@/views/AboutView.vue'),
            meta:{title: '饮食分类', icon: '', affix: true },
          },
        ]
      },
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
export default router
