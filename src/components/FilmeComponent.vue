<template>
  <HeaderComponent />
  <div class="movie-details-container" v-if="ver">
    <div class="movie-details">
      <h1>{{ movie.title }}</h1>
      <img :src="`${movie.image}`" alt="Poster" class="poster" />
      <p>{{ movie.synopsis }}</p>
      <div class="additional-details">
        <span v-for="genre in movie.genres" :key="genre.id"
          >{{ genre.name }} >Gêneros: <strong>{{ genre }}</strong></span
        >
      </div>
      <RouterLink :to="{ name: 'episodios', params: { id: movieId } }">Assitir Agora</RouterLink>
    </div>
  </div>
  <FooterComponent />
</template>

<script setup>
import { ref } from 'vue'
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
    movie.value = response
    console.log(response)
    ver.value = true
  } catch (error) {
    console.error('Failed to fetch movie details:', error)
  }
}

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

.additional-details {
  display: block;
  margin: 20% 0;
}
span {
  display: block;
  margin: 10px;
}
</style>
