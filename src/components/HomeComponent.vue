<template>
  <div class="banner">
    <div class="filmes">
      <router-link
        :to="`/filme/${anime.mal_id}`"
        v-for="anime in animeList"
        :key="anime.mal_id"
        class="movie"
      >
        <img :src="anime.images.jpg.large_image_url" alt="Anime Poster" class="imagem-poster" />
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
    animeList.value = response.data
    console.log(response.data)
  } catch (error) {
    console.error('Failed to fetch anime list:', error)
  }
})
</script>

<style scoped>
.banner {
  background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/d85ca082-cdb9-46d9-b342-ece2fb14d34d/BR-pt-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg');
}

.movie {
  display: flex;
  background-color: white;
  margin: 20px;
  flex-wrap: wrap;
  max-width: 30%;
  color: black;
  border: 2px solid black;
  border-radius: 15px;
}

.imagem-poster {
  width: 30vw;
  height: 30vh;
  border-radius: 10px;
}

.filmes {
  display: flex;
  flex-wrap: wrap;
}

.movie > h2 {
  font-size: 1.5rem;
  margin: 0;
  padding: 10px;
}

.movie > p {
  font-size: 1rem;
  padding: 10px;
}

@media screen and (max-width: 768px) {
  .movie {
    max-width: 90%;
  }

  .imagem-poster {
    width: 90vw;
    height: 90vh;
  }
}
</style>
