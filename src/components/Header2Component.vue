<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { searchAnimeList } from '@/api/index'

const search = ref('')

const animeList = ref([])
async function pesquisa() {
  try {
    const response = await searchAnimeList(search.value)
    animeList.value = response.results
  } catch (error) {
    console.error('Failed to fetch anime list:', error)
  }
}
function clear() {
  animeList.value = []
}
</script>

<template>
  <header>
    <div class="logo"><img src="" alt="" />LOGO</div>
    <nav>
      <ul>
        <li><RouterLink to="/">HOME</RouterLink></li>
        <li><RouterLink to="/series">SERIES</RouterLink></li>
        <li><RouterLink to="/filmes">FILMES</RouterLink></li>
        <li><RouterLink to="/recente">MAIS RECENTE</RouterLink></li>
        <li><RouterLink to="/favoritos">MINHA LISTA</RouterLink></li>
      </ul>
    </nav>
    <div class="search">
      <div>
        <input type="text" v-model="search" /> <button @click="pesquisa()">Pesquisar</button>
      </div>
      <div class="results" v-if="animeList[0]">
        <ul>
          <button @click="clear()">X</button>
          <li v-for="anime in animeList" :key="anime.id">
            <RouterLink :to="`/filme/${anime.id}`">{{ anime.title }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <RouterLink to="/user"
        ><img
          src="https://semeandoafeto.imadel.org.br/packages/trustir/exclusiva/img/user_placeholder.png"
          alt=""
          width="30px"
      /></RouterLink>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
  position: relative;
}

nav ul {
  display: flex;
  gap: 1rem;
}

nav ul li {
  list-style: none;
}
.logo {
  width: 100px;
}
header > div > a > img {
  border-radius: 50%;
}
.search {
  display: flex;
  gap: 1rem;
}
.results {
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  top: 60px;
  z-index: 1;
}
@media screen and (max-width: 768px) {
  header {
    flex-direction: column;
  }
  nav ul {
    flex-direction: column;
  }
  nav ul li {
    margin: 0.5rem;
  }
  .logo {
    margin-bottom: 1rem;
  }
}
</style>
