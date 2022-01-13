import {
  createRouter,
  createWebHistory
} from 'vue-router';
import TableCost from '../views/tableCost.vue';

const routes = [{
    path: '/',
    redirect: '/table-cost',
  },
  {
    path: '/table-cost',
    name: 'table-cost',
    component: TableCost,
  }
];

const router = createRouter({
  history: createWebHistory(''),
  routes,
});

export default router;