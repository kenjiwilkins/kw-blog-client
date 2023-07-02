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
import { useRoute, useRouter } from "vue-router";
import { setTitle } from "@/utils";
const article = ref();
const route = useRoute();
const router = useRouter();
onMounted(() => {
  getArticle(typeof route.params.id === "string" ? route.params.id : "")
    .then((entry) => {
      article.value = entry;
      console.log(entry);
      typeof article.value.fields.title === "string"
        ? setTitle(article.value.fields.title)
        : console.error("Article title not found");
    })
    .catch((error) => {
      console.error(error);
      router.push("/404");
    });
});
</script>
