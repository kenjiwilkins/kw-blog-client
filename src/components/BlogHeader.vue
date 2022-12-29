<template>
  <header
    class="sticky top-0 z-50 flex flex-col items-center space-y-2 border-r border-solid h-screen min-w-max"
  >
    <div class="flex-col items-center">
      <h1 class="pt-6 text-3xl">
        <router-link to="/">
          <span>KW BLOG</span>
        </router-link>
      </h1>
      <hr class="my-2" />
    </div>
    <div class="px-6">
      <ul class="mb-2">
        <p class="text-lg font-bold">Category</p>
        <li
          v-if="categories"
          v-for="category in categories.items"
          :key="category.sys.id"
        >
          <router-link
            :to="`/category/${category.sys.id}`"
            class="flex justify-between hover:underline"
          >
            <span>{{ category.fields.categoryName }}</span>
          </router-link>
        </li>
      </ul>
      <ul>
        <p class="text-lg font-bold">Tag</p>
        <li v-if="tags" v-for="tag in tags.items" :key="tag.sys.id">
          <router-link
            :to="`/tag/${tag.sys.id}`"
            class="flex justify-between hover:underline"
          >
            {{ tag.fields.tagName }}
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { getCategories, getTags } from "@/api";
const categories = ref();
const tags = ref();
onMounted(() => {
  getCategories().then((entries) => {
    categories.value = entries;
  });
  getTags().then((entries) => {
    tags.value = entries;
  });
});
</script>
