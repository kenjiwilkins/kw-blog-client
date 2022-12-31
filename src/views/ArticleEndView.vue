<template>
  <ContentWrapper>
    <Article :article="article" />
  </ContentWrapper>
</template>
<script setup lang="ts">
import ContentWrapper from "@/components/ContentWrapper.vue";
import Article from "@/components/ArticleBody.vue";
import { getArticle } from "@/api";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const article = ref();
const route = useRoute();
onMounted(() => {
  getArticle(typeof route.params.id === "string" ? route.params.id : "").then(
    (entry) => {
      article.value = entry;
    }
  );
});
</script>
