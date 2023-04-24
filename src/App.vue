<script setup>
import Header from '@/components/Header.vue'
import { RouterView } from 'vue-router';
import Home from './views/Home.vue'
</script>

<template>
  <Header></Header>
  <Transition name="fade" mode="out-in">
    <RouterView></RouterView>
  </Transition>
  <!-- <Home></Home> -->
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
