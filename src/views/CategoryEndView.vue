<template>
  <ContentWrapper>
    <h1 class="text-3xl pb-4">
      Category:
      <Transition
        ><span v-if="category">{{
          category.fields.categoryName
        }}</span></Transition
      >
    </h1>
    <ArticleList :articles="articles" />
  </ContentWrapper>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import ContentWrapper from "@/components/ContentWrapper.vue";
import ArticleList from "@/components/ArticleList.vue";
import { getCateory, getCategoryArticles } from "@/api";
const category = ref();
const articles = ref();
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
const fetchArticles = async (id: string) => {
  try {
    await getCategoryArticles(id).then((entries) => {
      articles.value = entries;
    });
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};
onMounted(() => {
  fetchCategory(typeof route.params.id === "string" ? route.params.id : "");
  fetchArticles(typeof route.params.id === "string" ? route.params.id : "");
});
onBeforeRouteUpdate((to, from, next) => {
  fetchCategory(typeof to.params.id === "string" ? to.params.id : "");
  next();
});
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
