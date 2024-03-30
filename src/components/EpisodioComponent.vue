<template>
  <div class="episode-list banner">
    <div v-for="episode in episodes.episodes" :key="episode.id" class="episode">
      <div class="episode-info">
        <img
          :src="
            episodes.image !== null
              ? episodes.image
              : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
          "
          alt=""
          id="thumbnail"
        />
        <h2>{{ episode.id }}</h2>
        <a :href="'' + `${episode.url}`" class="episode-link">Watch Episode</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getMovieDetails } from '@/api/index'

const route = useRoute()
const animeId = route.params.id
const episodes = ref([])

onMounted(async () => {
  try {
    const response = await getMovieDetails(animeId)
    episodes.value = response
  } catch (error) {
    console.error('Failed to fetch anime episodes:', error)
  }
})
</script>

<style scoped>
.episode-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.episode {
  display: flex;
  margin: 20px;
  width: 20%;
  min-width: 200px;
  border: 2px solid #000;
  border-radius: 14px;
  backdrop-filter: blur(10px);
}

#thumbnail {
  display: flex;
  width: 100%;
  height: 80%;
  border-radius: 10px;
  margin-right: 30px;
}

.episode-info h2 {
  font-size: 1.2rem;
  margin: 5px;
}

.episode-link {
  margin: 10px 0px 0px 5px;
}
</style>
