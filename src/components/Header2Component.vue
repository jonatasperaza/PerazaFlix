<script setup>
import { ref, watch } from 'vue'

import Recent from 'vue-material-design-icons/History.vue'
import Account from 'vue-material-design-icons/Account.vue'
import Menu from 'vue-material-design-icons/Menu.vue'
import Magnify from 'vue-material-design-icons/Magnify.vue'
import { searchAnimeList } from '@/api/index'

const menuAberto = ref(false)
const pesquisaAberta = ref(false)

const search = ref('')

watch(search, () => {
  if (search.value != '') {
    pesquisa()
  } else {
    clear()
  }
})

const animeList = ref([])
async function pesquisa() {
  try {
    const response = await searchAnimeList(search.value)
    animeList.value = response.results
    console.log(response.results)
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
    <div class="header--logo">
      <img src="../../public/windows11/LargeTile.scale-100.png" alt="Logo" />
      <h1>PerazaFlix</h1>
    </div>
    <nav>
      <ul :class="menuAberto ? 'menu' : ''">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/series">Series</RouterLink>
        <RouterLink to="/filmes">Filmes</RouterLink>
        <RouterLink to="/recente">Recente</RouterLink>
        <RouterLink to="/favoritos">Favoritos</RouterLink>
      </ul>
    </nav>
    <div>
      <div :class="pesquisaAberta ? 'search' : 'form'">
        <input
          class="input-search"
          v-model="search"
          placeholder="Type your text"
          required=""
          type="text"
        />
        <span class="input-border"></span>
      </div>
      <div class="results" v-if="animeList[0]">
        <ul class="list-search">
          <button class="close-list" @click="clear()">X</button>
          <li v-for="anime in animeList" :key="anime.id" class="anime">
            <RouterLink :to="`/filme/${anime.id}`">
              <h3 class="anime-name">{{ anime.title.substring(0, 5) }}...</h3>
              <img class="baner" :src="anime.image" alt="" />
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="header--icons">
      <Magnify class="menu-hamburger" @click="pesquisaAberta = !pesquisaAberta" />
      <RouterLink to="/user"><Account /></RouterLink>
      <RouterLink to="/recente"><Recent /></RouterLink>
      <Menu class="menu-hamburger" @click="menuAberto = !menuAberto" />
    </div>
  </header>
</template>

<style scoped>
header {
  background: #1f1e1e;
  box-shadow:
    0 10px 20px rgba(248, 248, 248, 0.19),
    0 6px 6px rgba(255, 254, 254, 0.23);
  padding: 0.2rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.header--logo {
  display: flex;
  align-items: center;
}
.header--logo img {
  width: 3rem;
  height: 3rem;
  margin-right: 0.5rem;
}
nav ul {
  display: flex;
  gap: 1rem;
}
nav li {
  list-style: none;
}
.results ul li {
  list-style: none;
}

.header--icons {
  display: flex;
  gap: 1rem;
}
.menu-hamburger {
  display: none;
}
.baner {
  width: 100px;
  height: 150px;
}
/* codigo pesquisa*/
.form {
  --width-of-input: 169px;
  --border-height: 1px;
  --border-before-color: rgba(221, 221, 221, 0.39);
  --border-after-color: #5891ff;
  --input-hovered-color: #4985e01f;
  position: relative;
  width: var(--width-of-input);
}
/* styling of Input */
.input {
  color: #fff;
  font-size: 0.9rem;
  background-color: transparent;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: var(--border-height) solid var(--border-before-color);
}
.input-search{
  width: 70%;
  display: flex;
  border-radius: 15px;
  padding: 5px 10px ;
}
/* styling of animated border */
.input-border {
  position: absolute;
  background: var(--border-after-color);
  width: 0;
  height: 2px;
  bottom: 0;
  margin-left: 4%;
  transition: 0.3s ease-in-out;
}
/* Hover on Input */
input:hover {
  background: var(--input-hovered-color);
  color: #fff;
}

input:focus {
  outline: none;
}
/* here is code of animated border */
input:focus ~ .input-border {
  width: 73%;
  margin-left: 4%;
}
/*Fim do codigo*/
.results {
  position: absolute;
  backdrop-filter: blur(15px);
  color: #000000;
  padding: 2rem 1rem 1rem 1rem;
  margin: 10px 0;
  border-radius: 5px;
  border: 3px solid black;
  z-index: 1;
  max-height: 80vh;
  max-width: 15vw;
  overflow: scroll;
  font-size: 20px;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;

}
.close-list{
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px 15px 0 0;
  color: #ffffff;
}
.anime-name{
  color: #ffffff;
}
a {
  transition: 0.3s ease-in-out;
}
a:hover {
  scale: 1.1;
}
@media (max-width: 768px) {
  nav ul {
    display: none;
  }
  .menu-hamburger {
    display: block;
    cursor: pointer;
  }

  nav .menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: rgba(66, 66, 66, 0.9);
    box-shadow:
      0 10px 20px rgba(255, 255, 255, 0.19),
      0 6px 6px rgba(75, 69, 69, 0.23);
    border-radius: 10px;
    right: 0;
    text-align: right;
    padding: 10px 16px;
    z-index: 2;
    color: white;
  }
  nav .menu li {
    display: block;
    margin-top: 12px;
  }
  .search {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: rgba(66, 66, 66, 0.9);
    box-shadow:
      0 10px 20px rgba(255, 255, 255, 0.19),
      0 6px 6px rgba(75, 69, 69, 0.23);
    border-radius: 25px;
    right: 0;
    top: 50px;
    text-align: right;
    padding: 5px;
    z-index: 1;
  }
  .input-search{
    width: auto;
  }
  .input-search:hover{
    background-color: #1f1e1e;
  }
  .results {
    right: 15px;
    top: 80px;
    font-size: 30px;
    min-width: var(--width-of-input);
    max-width: var(--width-of-input);
    max-height: 50vh;
    overflow: scroll;
    z-index: 2;
  }
  .anime {
    padding-top: 10px;
  }
  .form {
    display: none;
  }
}
</style>
