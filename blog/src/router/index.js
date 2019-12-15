import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import FirstPage from '../views/FirstPage.vue'
import Nicearticles from '../views/Nicearticles.vue'
import Articlefiles from '../views/Articlefiles.vue'
import NProgress from "nprogress"; //加载条
import "nprogress/nprogress.css"; //加载条样式
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FirstPage',
    component: FirstPage,
    redirect: '/nicearticles',
    children: [
      {
        path: "/nicearticles",
        name: "Nicearticles",
        component: Nicearticles,
        title: "精彩博文"
      },
      {
        path: "/articlefiles",
        name: "Articlefiles",
        component: Articlefiles,
        title: "博文归档"
      }
    ]
  }
  // {
  // path: '/about',
  // name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach((to, from) => {
  NProgress.done();
})

export default router
