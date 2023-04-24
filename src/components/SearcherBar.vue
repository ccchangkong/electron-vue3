<script setup>
import { ref } from 'vue'
import useWebStroe from '@/stroe/index.js'
const webStroe = useWebStroe()
const visible = ref(false);
const str = ref("https://www.baidu.com");
let btnAbled = true

const handleClick = () => {
    visible.value = true;
};
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
    <div class="search-box">
        <a-input-search :style="{ width: '320px' }" placeholder="Please enter something" search-button />
        <a-button type="primary" @click="handleClick">
            <template #icon>
                <icon-plus />
            </template>
        </a-button>
    </div>
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
</template>

<style scoped lang="scss">
.search-box {
    height: 60px;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
