<script setup lang="ts"></script>

<template>
  <vum-element count-type="+2">
    <p>Running on vite + vue3</p>
  </vum-element>
  <vum-button @click="() => console.log('click')" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
