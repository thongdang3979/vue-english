<script setup lang="ts">
import { ref } from "vue";

const menus = ref([{ name: "Trang chủ" }, { name: "Đăng nhập" }]);
</script>

<template>
    <header>
        <div class="header-area container">
            <div class="logo-area">
                <img
                    src="https://thongdang.space/styles/default/xenforo/thongdang-logo-orange.png"
                    width="100"
                    height="30"
                    alt="logo"
                />
            </div>
            <div class="menu-area">
                <div v-for="item in menus" :key="item.name" class="menu-item">
                    <span>{{ item.name }}</span>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
@import "@/assets/css/partials/header.css";
</style>
