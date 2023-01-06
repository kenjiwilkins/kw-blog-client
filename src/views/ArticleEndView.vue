<template>
  <ContentWrapper>
    <Article :article="article" />
  </ContentWrapper>
</template>
<script setup lang="ts">
import ContentWrapper from "@/components/ContentWrapper.vue";
import Article from "@/components/Article.vue";
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
      typeof article.value.fields.title === "string"
        ? setTitle(article.value.fields.title)
        : console.error("Article title not found");
    }
  );
});
</script>
