<template>
  <Suspense>
    <template #default>
      <FilmeComponent :movieId="movieId" />
      <!-- Passando movieId como prop -->
    </template>
    <template #fallback>
      <div>Carregando...</div>
    </template>
  </Suspense>
</template>

<script setup>
import FilmeComponent from '@/components/FilmeComponent.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movieId = route.params.id // Usando o ID da rota como movieId
</script>
