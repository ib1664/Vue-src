import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Faculty from '../components/faculty/Faculty.vue'
import UOSDashboard from '../components/uos/UOS.vue'
import ReviewDashboard from '../components/review/ReviewPage.vue'
import Login from '../components/logins/Login.vue'
import Register from '../components/logins/Register.vue'
import Reset from '../components/logins/Reset.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Faculty',
    component: Faculty,
    meta: {
      title: 'Faculties'
    }
  },
  {
    path: '/uos/:faculty',
    name: 'Unit of Study',
    component: UOSDashboard,
    meta: {
      title: 'Unit of Study'
    }

  },

   {
     path: '/reviews',
     name: 'Reviews',
     component: ReviewDashboard,
     meta : {
       title: 'reviews'
     }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      title: 'login'
    }
  },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset,
    meta:{
      title: 'reset'
    }
  },
  {
    path: '/register',
    name: 'ReseRegistert',
    component: Register,
    meta:{
      title: 'Register'
    }
  }

  
]

const router = new VueRouter({
  routes
})

export default router
