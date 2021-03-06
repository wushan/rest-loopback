import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './App'
import Home from './components/Home'
import Admin from './admin/Admin'
import AdminHome from './admin/Home'
import Signup from './admin/Signup'
import Signin from './admin/Signin'
import News from './admin/News'
import PostNews from './admin/News/PostNews'
// Vue Material
Vue.use(VueMaterial)
Vue.material.theme.registerAll({
  default: {
    primary: 'red',
    accent: 'orange'
  },
  indigo: {
    primary: 'indigo',
    accent: 'pink'
  },
  white: {
    primary: 'white',
    accent: 'indigo'
  }
})

// Vue Router
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/admin', component: Admin,
      children: [
        {
          path: 'home',
          component: AdminHome
        },
        {
          path: 'news',
          component: News,
          children: [
            {
              path: 'create',
              component: PostNews
            }
          ]
        },
        {
          path: 'signup',
          component: Signup
        },
        {
          path: 'signin',
          component: Signin
        }
      ]
    }
  ]
})

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

new Vue({
  router: router,
  components: {
    App
  }
}).$mount('#app')
