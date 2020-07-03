
import HomePage from '../pages/home.svelte';
import NotFoundPage from '../pages/404.svelte';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
