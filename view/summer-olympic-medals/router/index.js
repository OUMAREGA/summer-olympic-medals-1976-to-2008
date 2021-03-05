import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


  const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../src/components/Home.vue'),
  },
  {
    path: '/top_ten_gold',
    name: 'top_ten_gold',
    component: () => import(/* webpackChunkName: "about" */ '../src/components/Gold.vue'),
  },
  {
    path: '/top_ten_silver',
    name: 'top_ten_silver',
    component: () => import(/* webpackChunkName: "about" */ '../src/components/Silver.vue'),
  },
  {
    path: '/top_ten_bronze',
    name: 'top_ten_bronze',
    component: () => import(/* webpackChunkName: "about" */ '../src/components/Bronze.vue'),
  },
 {
      path: '/predict',
      name: 'predict',
     component: () => import(/* webpackChunkName: "about" */ '../src/components/Predict'),
  },
  {
    path: "*",
    redirect: "/"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
