<script setup lang="ts">
import { RouterView } from "vue-router";
import BlogHeader from "./components/BlogHeader.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-50 text-gray-700">
    <BlogHeader class="flex-shrink-0" />
    <RouterView class="flex-grow" />
  </div>
</template>
