<script setup>
import { ref, provide } from 'vue'
import SearcherBar from '../components/SearcherBar.vue'
import List from '../components/list/List.vue'
import Modal from '../components/Modal.vue'
const visible = ref(false);
const inputVal = ref("")
const setInputVal = (key) => {
  inputVal.value = key
}
provide('inputVal', {
  inputVal,
  setInputVal
})

const setIsVisble = (value, url = '') => {
  inputVal.value = url
  visible.value = value
}
provide('visible', visible)
provide('setIsVisble', setIsVisble)

const keywords = ref("")
const setKeywords = (key) => {
  keywords.value = key
}
provide('keywords', {
  keywords,
  setKeywords
})

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
