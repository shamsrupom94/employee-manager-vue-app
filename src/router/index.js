import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewEmployee from '@/components/NewEmployee'
import Profile from '@/components/Profile'
import EditEmployee from '@/components/EditEmployee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/new-employee',
      name: 'NewEmployee',
      component: NewEmployee
    },
    {
      path: '/edit-employee/:employee_id',
      name: 'EditEmployee',
      component: EditEmployee
    },
    {
      path: '/profile/:employee_id',
      name: 'Profile',
      component: Profile
    }

  ]
})
