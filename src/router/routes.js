
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Login.vue')
      }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/home',
        component: () => import('pages/Index.vue')
      }
    ]
  },
  {
    path: '/realizar-cadastro',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/realizar-cadastro',
        component: () => import('pages/Cadastro.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
