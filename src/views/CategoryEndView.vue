<template>
  <ContentWrapper>
    <h1 class="text-3xl pb-4">
      Category: <span v-if="category">{{ category.fields.categoryName }}</span>
    </h1>
    <ArticleList />
  </ContentWrapper>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import ContentWrapper from "@/components/ContentWrapper.vue";
import ArticleList from "@/components/ArticleList.vue";
import { getCateory } from "@/api";
const category = ref();
const route = useRoute();
const fetchCategory = async (id: string) => {
  try {
    await getCateory(id).then((entry) => {
      category.value = entry;
    });
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};
onMounted(() => {
  fetchCategory(typeof route.params.id === "string" ? route.params.id : "");
});
onBeforeRouteUpdate((to, from, next) => {
  fetchCategory(typeof to.params.id === "string" ? to.params.id : "");
  next();
});
</script>
