<script setup>
import { ref, onMounted, inject } from 'vue'
import useWebStroe from '@/stroe/index.js'
import { storeToRefs } from 'pinia'
const webStroe = useWebStroe()
const { websites } = storeToRefs(webStroe)

const setIsVisble = inject('setIsVisble');
onMounted(() => {
  webStroe.init()
})

</script>

<template>
  <a-list v-if="websites.length">
    <a-list-item v-for="(item, index) in websites" :key="item.url">
      <a-list-item-meta :title="item.title" :description="item.url">
        <template #avatar>
          <a-avatar shape="square">
            <img alt="avatar" :src="item.imgUrl" />
          </a-avatar>
        </template>
      </a-list-item-meta>
      <template #actions>
        <icon-edit @click="setIsVisble(true, item.url)" />
        <icon-delete @click="webStroe.deleteItem(item.url)" />
      </template>
    </a-list-item>
  </a-list>
  <a-empty v-else />
</template>

<style scoped></style>
