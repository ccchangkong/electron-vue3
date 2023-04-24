<script setup>
import { inject } from 'vue'
import { storeToRefs } from 'pinia'
import useWebSites from './useWebStroe'

const { webStroe: useWebStore, keywords } = useWebSites()

const { websites } = storeToRefs(useWebStore)
const setIsVisble = inject('setIsVisble');

const itemCLick = (item) => {
  myApi.open(item.url)
  // window.open(item.url)

}
</script>

<template>
  <a-list v-if="websites.length">
    <a-list-item v-for="(item, index) in useWebStore.find(keywords)" :key="item.url" @click="itemCLick(item)">
      <a-list-item-meta :title="item.title" :description="item.url">
        <template #avatar>
          <a-avatar shape="square">
            <img alt="avatar" :src="item.imgUrl" />
          </a-avatar>
        </template>
      </a-list-item-meta>
      <template #actions>
        <icon-edit @click.stop="setIsVisble(true, item.url)" />
        <icon-delete @click.stop="useWebStore.deleteItem(item.url)" />
      </template>
    </a-list-item>
  </a-list>
  <a-empty v-else />
</template>

<style scoped>
.xx {
  position: fixed;
  bottom: 50px;
  right: 20px;
  z-index: 1000;
  color: #fff;
  cursor: pointer;
}
</style>
