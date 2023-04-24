<script setup>
import Header from '@/components/Header.vue'
import { RouterView } from 'vue-router';
import Home from './views/Home.vue'
</script>

<template>
  <Header></Header>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <!-- <Home></Home> -->
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
