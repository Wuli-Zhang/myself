import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: ()=> import('./../views/index') 
  }, {
    path: '/program',
    name: 'Program',
    component: ()=> import('./../views/program') 
  }, {
    path: '/me',
    name: 'Me',
    component: ()=> import('./../views/me') 
  }, {
    path: '*',
    redirect: '/index'
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
