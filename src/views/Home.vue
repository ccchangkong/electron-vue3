<script setup>
import { ref } from 'vue'
import SearcherBar from '../components/SearcherBar.vue'
import List from '../components/List.vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
<main>
    <SearcherBar/>
    <List/>
</main>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
