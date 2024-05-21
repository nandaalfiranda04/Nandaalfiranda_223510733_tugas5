import { createRouter, createWebHistory } from 'vue-router';
import CardComponent from '../components/card.vue';
import CarouselComponent from '../components/carousel.vue';

const routes = [
  { path: '/', component: CardComponent },
  { path: '/carousel', component: CarouselComponent }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
