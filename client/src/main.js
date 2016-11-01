import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './App'
import Home from './components/Home'
import Admin from './admin/Admin'
import Signup from './admin/Signup'
import Signin from './admin/Signin'
// Vue Material
Vue.use(VueMaterial)
Vue.material.theme.register('default', {
  primary: 'indigo',
  accent: 'pink'
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
