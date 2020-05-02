import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes= [
  {path: '/',redirect: '/heroes'},
  {path: '/heroes/add',name: 'AddHeroes',component: () => import('../views/add')},
  {path: '/edit/:id',component:() =>import('../views/edit.vue')},
  {path: '/heroes',name: 'heroes', component: () => import('../views/hero.vue')},
  {path: '/zb',name: 'equip', component: () => import('../views/equip.vue')},
  {path: '/jn', name: 'skill', component: () => import('../views/skill.vue')}
]


const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active'
})

export default router
