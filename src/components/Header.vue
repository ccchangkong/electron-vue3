<template>
    <header>
        <a-menu mode="horizontal" :default-selected-keys="['/']" @menu-item-click="clickFn">
            <a-menu-item :key="item.path" v-for="item in routes">
                {{ item.name }}
            </a-menu-item>
        </a-menu>
    </header>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from 'vue'
const router = useRouter()
const routes = ref(router.getRoutes())

const clickFn = (item) => {
    // console.log(item)
    router.push(item)
}
</script>

<style lang="scss" scoped></style>