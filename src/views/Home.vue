<script setup>
import { ref, provide } from 'vue'
import SearcherBar from '../components/SearcherBar.vue'
import List from '../components/List.vue'
import useWebStroe from '@/stroe/index.js'
const webStroe = useWebStroe()
const visible = ref(false);
provide('visible', visible)
const str = ref("https://www.baidu.com");

let btnAbled = true

const handleOk = () => {
  if (btnAbled) {
    visible.value = false;
  }

};
const handleCancel = () => {

  if (btnAbled) {
    visible.value = false;
  }
}
const handleAdd = async () => {
  btnAbled = false
  const result = await myApi.sendUrl(str.value)
  webStroe.add(result)
  btnAbled = true
  // visible.value = false;
}


</script>

<template>
  <main>
    <SearcherBar />
    <List />
    <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel" :mask-closable="false">
      <template #title>
        Title
      </template>
      <div><a-input :style="{ width: '320px' }" default-value="content" placeholder="Please enter something" allow-clear
          v-model="str" />
        <a-button type="primary" @click="handleAdd">
          <template #icon>
            <icon-plus />
          </template>
        </a-button>
      </div>
    </a-modal>
  </main>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
