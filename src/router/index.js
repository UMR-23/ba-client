import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home/index.vue'
import login from '@/views/login/index.vue'
import user from '@/views/user/index.vue'
import stuBook from '@/views/student/stuBook.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/login',component:login},
    {path:'/user',component:user},
    {path:'/stuBook',component:stuBook},
  ]
})

export default router
