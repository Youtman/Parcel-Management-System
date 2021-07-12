import Vue from 'vue';
import VueRouter from 'vue-router';
import Teller from '../views/Teller.vue';
import Landing from '../views/Landing.vue';
import Login from '../views/Login.vue';
import Admin from '../views/admin/Index.vue';
import Users from '../views/admin/Users.vue';
import Adduser from '../views/admin/Adduser.vue';
import AddCustomer from '../views/admin/AddCustomer.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/teller',
    name: 'Teller',
    component: Teller,
  },
  {
    path: '/addcustomer',
    name: 'AddCustomer',
    component: AddCustomer,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/adduser',
    name: 'Adduser',
    component: Adduser,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
