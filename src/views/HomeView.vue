<script setup lang="ts">
import { onMounted, ref } from "vue";
import postsService from "../services/postsService";

interface Item {
    id: number;
}
const data = ref<Item[]>([]);

const handleGetPosts = () => {
    postsService.getPosts().then((res) => {
        data.value = res;
    });
};

onMounted(() => {
    handleGetPosts();
});
</script>

<template>
    <main>
        <div class="about-page">
            <h1 v-for="item in data" :key="item.id">{{ item.date }}</h1>
        </div>
    </main>
</template>
