import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/index'
import {
  TabPane
} from 'element-ui'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect:'/dashboard',
    children:[
      {
        path:'/dashboard',
        name:'Dashboard',
        component:()=>import('../views/dashboard/index')
      },
      {
        path:'/moneyManagement',
        name:'moneyManagement',
        component:()=>import('../views/moneyManagement/index')
      },
      {
        path:'/infoManagement',
        name:'infoManagement',
        component:()=>import('../views/infoManagement/index')
      },
      {
        path:'/moneyDistribution',
        name:'moneyDistribution',
        component:()=>import('../views/moneyDistribution/index')
      },
      {
        path:'/personalInformation',
        name:'personalInformation',
        component:()=>import('../views/personalInformation/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "about" */ '../views/login/login.vue' )
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( /* webpackChunkName: "about" */ '../views/login/register.vue' )
  },
  {
    path:'/404',
    name:'404',
    component: () => import( /* webpackChunkName: "about" */ '../views/404.vue' )
  },
  {
    path:'*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})
// 路由守卫
router.beforeEach((to, from, next) => {
  const IS_LOGIN = sessionStorage.userToken;
  if (to.path == '/login' || to.path == '/register') {
    next();
  }else {
    IS_LOGIN ? next() : next('/login');
  }
})
export default router