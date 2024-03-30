<template>
    <HeaderComponent />
    <Suspense>
      <template #default>
        <EpisodioComponent :movieId="movieId" />
        <!-- Passando movieId como prop -->
      </template>
      <template #fallback>
        <div>Carregando...</div>
      </template>
    </Suspense>
    <FooterComponent />
  </template>
  
  <script setup>
  import EpisodioComponent from '@/components/EpisodioComponent.vue'
  import { useRoute } from 'vue-router'
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  const route = useRoute()
  const movieId = route.params.id // Usando o ID da rota como movieId
  </script>
  