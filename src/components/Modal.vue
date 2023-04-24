<template>
    <a-modal v-model:visible="visible" @onBeforeOk="handleOk" @cancel="handleCancel" :on-before-ok="handleBeforeOk"
        :on-before-cancel="handleBeforeCancel" :mask-closable="false" unmountOnClose>
        <template #title>
            Title
        </template>
        <div><a-input :style="{ width: '320px' }" default-value="content" placeholder="Please enter something" allow-clear
                v-model="keywords" />
            <a-button type="primary" @click="handleAdd">
                <template #icon>
                    <icon-plus />
                </template>
            </a-button>
        </div>
    </a-modal>
</template>

<script setup>
import { inject } from 'vue'

import useWebStroe from '@/stroe/index.js'
const webStroe = useWebStroe()
const { keywords } = inject('keywords');


const visible = inject('visible');
let btnAbled = true

const handleOk = () => {
    visible.value = false;
    console.log('sss')


};
const handleBeforeOk = () => {

    if (btnAbled) {
        // visible.value = false;
        return true
    } else {
        return false
    }
}

const handleCancel = () => {

    visible.value = false;
}
const handleBeforeCancel = () => {

    if (btnAbled) {
        // visible.value = false;
        return true
    } else {
        return false
    }
}

const handleAdd = async () => {
    btnAbled = false
    const result = await myApi.sendUrl(keywords.value)
    webStroe.add(result)
    btnAbled = true
    // visible.value = false;
}

</script>

<style lang="scss" scoped></style>