<template>
    <div>
        <a-image-preview-group infinite>
            <a-row style="width: 100%;">
                <a-col :xs="10" :sm="10" :md="8" :lg="6" :xl="6" :xxl="6" v-for="item in filelist" :key="item">
                    <a-image :src="`/upload/${item}`" witdh="100%" />
                </a-col>

            </a-row>

        </a-image-preview-group>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const filelist = ref([])
onMounted(async () => {
    const files = await myApi.getFileList()
    filelist.value = files

})
</script>

<style lang="scss" scoped></style>