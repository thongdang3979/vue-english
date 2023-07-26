<template>
    <div class="about">
        <h1 v-for="item in data" :key="item.id">{{ item.id }}</h1>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import testService from "../services/testService";

interface Item {
    id: string;
}
const data = ref<Item[]>([]);

const handleGetData = () => {
    testService.getData().then((res) => {
        data.value = res;
        console.log(data.value);
    });
};

onMounted(() => {
    handleGetData();
});
</script>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: center;
    }
}
</style>
