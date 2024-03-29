import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    },
    {
      path: '/series',
      name: 'series',
      component: () => import('../views/SeriesView.vue')
    },
    {
      path: '/filmes',
      name: 'movies',
      component: () => import('../views/FilmesView.vue')
    },
    {
      path: '/recente',
      name: 'recent',
      component: () => import('../views/RecentView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/favoritos',
      name: 'favorites',
      component: () => import('../views/UserListView.vue')
    },
    {
      path: '/filme/:id',
      name: 'Filme',
      component: () => import('@/views/FilmeView.vue'),
      props: true
    }
  ]
})

export default router
