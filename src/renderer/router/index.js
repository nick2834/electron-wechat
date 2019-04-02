import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: require('@/views/Login').default
    },
    {
      path: '/main',
      name: 'main',
      component: require('@/views/Main').default,
      children:[
        {
          path:'home',
          name:'home',
          component:require('@/views/HomePage').default
        },
        {
          path:'news',
          name:'news',
          component:require('@/views/NewsPage').default
        },
        {
          path:'user',
          name:'user',
          component:require('@/views/UserPage').default
        },
      ]
    },
    {
      path:'/webview',
      name:'webview',
      component:require('@/views/WebviewPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
