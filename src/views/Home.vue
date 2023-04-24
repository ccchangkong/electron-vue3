<script setup>
import { ref, provide } from 'vue'
import SearcherBar from '../components/SearcherBar.vue'
import List from '../components/List.vue'
import Modal from '../components/Modal.vue'
const visible = ref(false);
const keywords = ref("")
const setKeywords = (key) => {
  keywords.value = key
}
provide('keywords', {
  keywords,
  setKeywords
})

const setIsVisble = (value, url = '') => {
  keywords.value = url
  visible.value = value
}
provide('visible', visible)
provide('setIsVisble', setIsVisble)



</script>

<template>
  <main>
    <SearcherBar />
    <List />
    <Modal />
  </main>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
