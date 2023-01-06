<template>
  <ContentWrapper>
    <ArticleBody :article="article" />
  </ContentWrapper>
</template>
<script setup lang="ts">
import ContentWrapper from "@/components/ContentWrapper.vue";
import ArticleBody from "@/components/ArticleBody.vue";
import { getArticle } from "@/api";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { setTitle } from "@/utils";
const article = ref();
const route = useRoute();
onMounted(() => {
  getArticle(typeof route.params.id === "string" ? route.params.id : "").then(
    (entry) => {
      article.value = entry;
      setTitle(
        entry.fields &&
          typeof entry.fields === "object" &&
          "title" in entry.fields &&
          typeof entry.fields.title === "string"
          ? entry.fields.title
          : "Article"
      );
    }
  );
});
</script>
