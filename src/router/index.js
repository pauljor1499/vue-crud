import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import add from '../views/AddPersonPage.vue'
import update from '../views/UpdatePersonPage.vue'
import remove from '../views/RemovePersonPage.vue'
import viewList from '../views/ViewPersonList.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/add',
    name: 'Add',
    component: add
  },

  {
    path: '/update',
    name: 'Update',
    component: update
  },

  {
    path: '/remove',
    name: 'Remove',
    component: remove
  },

  {
    path: '/viewList',
    name: 'ViewList',
    component: viewList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
