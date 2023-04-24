<script setup>
import { ref, onMounted } from 'vue'
import useWebStroe from '@/stroe/index.js'
import { storeToRefs } from 'pinia'
const webStroe = useWebStroe()
const { websites } = storeToRefs(webStroe)

onMounted(() => {
  webStroe.init()
})

</script>

<template>
  <a-list v-if="websites.length">
    <a-list-item v-for="(item, index) in websites" :key="index">
      <a-list-item-meta :title="item.title" :description="item.url">
        <template #avatar>
          <a-avatar shape="square">
            <img alt="avatar" :src="item.imgUrl" />
          </a-avatar>
        </template>
      </a-list-item-meta>
      <template #actions>
        <icon-edit />
        <icon-delete />
      </template>
    </a-list-item>
  </a-list>
  <a-empty v-else />
</template>

<style scoped></style>
