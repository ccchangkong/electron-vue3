<script setup>
import { ref, inject } from 'vue'

const setIsVisble = inject('setIsVisble');

const handleClick = () => {
    setIsVisble(true);
};
const { keywords, setKeywords } = inject('keywords');
const searchStr = ref("")
const searchFn = () => {
    setKeywords(searchStr.value)
}

</script>

<template>
    <div class="search-box">
        <a-input-search :style="{ width: '320px' }" placeholder="Please enter something" search-button v-model="searchStr"
            @search="searchFn" />
        <a-button type="primary" @click="handleClick">
            <template #icon>
                <icon-plus />
            </template>
        </a-button>
    </div>
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
