import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

Vue.use(VueRouter)

export default new VueRouter({

  routes: [
    {
      name: 'MSite',
      path: '/msite',
      component: MSite,
      meta:{
        showFooter: true
      }
    },
    {
      name: 'Order',
      path: '/order',
      component: Order,
      meta:{
        showFooter: true
      }
    },
    {
      name: 'Profile',
      path: '/profile',
      component: Profile,
      meta:{
        showFooter: true
      }
    },
    {
      name: 'Search',
      path: '/search',
      component: Search,
      meta:{
        showFooter: true
      }
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/msite'
    }
    ]

})
