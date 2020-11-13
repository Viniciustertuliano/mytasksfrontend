import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/template/Home';
import Categoria from '@/components/categoria/Categoria';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/categoria',
    component: Categoria,
    name: 'Categoria'
  },
];

const router = new VueRouter({
  routes,
});

export default router;
