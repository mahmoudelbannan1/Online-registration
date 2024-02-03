import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import userdashboard from '@/views/user/user-dashboard'
import lectures from '@/views/user/lectures'
import finished from '@/views/user/finished'
import degree from '@/views/user/degree'
import regest from '@/views/user/regest'
import doctordashboard from '@/views/doctor/doc-dashboard'
import classroom from '@/views/doctor/course-classroom'
import students from '@/views/doctor/students'
import admindashboard from '@/views/admin/admin-dashboard'
import managedoctors from '@/views/admin/manage-doctors'
import managecourses from '@/views/admin/manage-courses'


const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/user-dashboard',
    name: 'userdashboard',
    component: userdashboard
  },
  {
    path: '/lectures/:id',
    name: 'lectures',
    component: lectures
  },
  {
    path: '/finished',
    name: 'finished',
    component: finished
  },
  {
    path: '/degree',
    name: 'degree',
    component: degree
  },
  {
    path: '/regest',
    name: 'regest',
    component: regest
  },
  {
    path: '/doctor-dashboard',
    name: 'doctordashboard',
    component: doctordashboard
  },
  {
    path: '/classroom/:id',
    name: 'classroom',
    component: classroom
  },
  {
    path: '/students/:id',
    name: 'students',
    component: students
  },
  {
    path: '/admin-dashboard',
    name: 'admindashboard',
    component: admindashboard
  },
  {
    path: '/manage-doctors',
    name: 'managedoctors',
    component: managedoctors
  },
  {
    path: '/manage-courses',
    name: 'managecourses',
    component: managecourses
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
