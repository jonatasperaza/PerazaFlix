<script setup>
const data = new Date()
const ano = data.getFullYear()
</script>

<template>
  <footer>
    <p>Jonatas Silva Peraza © {{ ano }} - Todos os direitos reservados</p>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
}

footer p {
  margin: 0;
}
</style>
