<template>
  <div class="banner">
    <div class="filmes">
      <router-link
        :to="`/episodios/${anime.id}`"
        v-for="anime in animeList"
        :key="anime.mal_id"
        class="movie"
      >
        <img :src="anime.image" alt="Anime Poster" class="imagem-poster" />
        <h2>{{ anime.title }}</h2>
        <p>{{ anime.synopsis }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAnimeList } from '@/api/index'

const animeList = ref([])

onMounted(async () => {
  try {
    const response = await getAnimeList()
    animeList.value = response.results
  } catch (error) {
    console.error('Failed to fetch anime list:', error)
  }
})
</script>

<style scoped>
.movie {
  display: flex;
  margin: 20px;
  border: 2px solid #000;
  border-radius: 14px;
  width: 20%;
  min-width: 200px;
  max-width: 20vw;
  flex-wrap: wrap;
  backdrop-filter: blur(10px);
}

.imagem-poster {
  width: 100%;
  height: 30vw;
  border-radius: 10px;
  object-fit: fill;
}

.filmes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.movie > h2 {
  font-size: 1.2rem;
  margin: 0;
  padding: 5px;
}

.movie > p {
  font-size: 1.2rem;
  padding: 10px;
}

@media screen and (max-width: 768px) {
  .movie {
    width: 100%;
  }
  .movie > h2 {
    font-size: 1.2rem;
  }

  .imagem-poster {
    width: 100%;
    height: 70%;
    margin: none;
  }
}
</style>
