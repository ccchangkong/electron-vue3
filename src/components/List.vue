<script setup>
import { ref } from 'vue'

defineProps({
  // msg: String,
})

const arr = ref([0, 1, 2])


</script>

<template>
  <a-list v-if="arr.length">
    <a-list-item v-for="idx in arr" :key="idx">
      <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
        description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.">
        <template #avatar>
          <a-avatar shape="square">
            <img alt="avatar"
              src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
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
