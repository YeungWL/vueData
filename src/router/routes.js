// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
export const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: () => import('views/layout/layout.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('views/Home.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ 'views/login/login.vue')
  }
]
