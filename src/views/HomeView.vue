<script setup lang="ts">
import ContentWrapper from "@/components/ContentWrapper.vue";
import ArticleList from "@/components/ArticleList.vue";
import TheWelcome from "@/components/TheWelcome.vue";
import { getArticles } from "@/api";
import { onMounted, ref } from "vue";

const articles = ref();
onMounted(() => {
  getArticles().then((entries) => {
    console.log(entries);
    articles.value = entries;
  });
});
</script>

<template>
  <main>
    <ContentWrapper>
      <TheWelcome />
      <ArticleList :articles="articles" />
    </ContentWrapper>
  </main>
</template>
