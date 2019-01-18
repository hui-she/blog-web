/*import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)*/

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/view/index'], resolve),
      redirect: "/home",
      children: [
        {
            path: 'home',
            name: 'home',
            component: resolve => require(['@/view/home'], resolve),
          }, {
            path: 'diary',
            name: 'diary',
            component: resolve => require(['@/view/diary'], resolve),
          }, {
            path: 'aboutMe',
            name: 'about-me',
            component: resolve => require(['@/view/aboutMe'], resolve),
          }, {
            path: 'message',
            name: 'message',
            component: resolve => require(['@/view/message'], resolve),
          }
      ]
    }
  ]
})
