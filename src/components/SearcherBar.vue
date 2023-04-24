<script setup>
import { ref, inject } from 'vue'

const visible = inject('visible');

const handleClick = () => {
    visible.value = true;
};

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
