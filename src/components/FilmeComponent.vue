<template>
  <HeaderComponent />
  <div class="movie-details-container" v-if="ver">
    <img :src="`${movie.images.jpg.large_image_url}`" alt="Backdrop" class="backdrop" />
    <div class="movie-details">
      <h1>{{ movie.title }}</h1>
      <img :src="`${movie.images.jpg.image_url}`" alt="Poster" class="poster" />
      <p>{{ movie.synopsis }}</p>
      <div class="additional-details">
        <span
          >Gêneros: <strong>{{ genres }}</strong></span
        >
        <span
          >Duração: <strong>{{ movie.duration }}</strong></span
        >
        <span
          >Produção: <strong>{{ productionCompanies }}</strong></span
        >
      </div>
      <a :href="movie.url" target="_blank">Visite o Site Oficial</a>
    </div>
  </div>
  <FooterComponent />
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getMovieDetails } from '@/api/index'
import FooterComponent from './FooterComponent.vue'
import HeaderComponent from './HeaderComponent.vue'

const route = useRoute()
const movieId = route.params.id
const movie = ref({})
const ver = ref(false)

async function loadMovie() {
  try {
    const response = await getMovieDetails(movieId)
    movie.value = response.data
    ver.value = true
  } catch (error) {
    console.error('Failed to fetch movie details:', error)
  }
}

const genres = computed(() => movie.value.genres.map((genre) => genre.name).join(', '))
const productionCompanies = computed(() =>
  movie.value.producers.map((producer) => producer.name).join(', ')
)

loadMovie()
</script>
<style scoped>
.movie-details-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.backdrop {
  width: 100%;
  height: auto;
}

.poster {
  width: 200px;
  height: auto;
}

.additional-details span {
  display: block;
  margin: 10px 0;
}
</style>
