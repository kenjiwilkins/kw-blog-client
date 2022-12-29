<script setup lang="ts">
import ContentWrapper from "@/components/ContentWrapper.vue";
import ArticleList from "@/components/ArticleList.vue";
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <main>
    <ContentWrapper>
      <TheWelcome />
      <ArticleList />
    </ContentWrapper>
  </main>
</template>
