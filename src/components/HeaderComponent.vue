<script setup>
import { RouterLink } from 'vue-router'
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
</style>
