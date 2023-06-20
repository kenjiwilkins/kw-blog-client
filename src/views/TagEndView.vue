<template>
  <ContentWrapper>
    <h1 class="text-3xl pb-4">
      Tag:
      <Transition
        ><span v-if="tag">{{ tag.fields.tagName }}</span></Transition
      >
    </h1>
    <ArticleList />
  </ContentWrapper>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import ContentWrapper from "@/components/ContentWrapper.vue";
import ArticleList from "@/components/ArticleList.vue";
import { getTag } from "@/api";
const tag = ref();
const route = useRoute();
async function fetchTag(id: string) {
  try {
    await getTag(id).then((entry) => {
      tag.value = entry;
    });
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
}
onMounted(() => {
  fetchTag(typeof route.params.id === "string" ? route.params.id : "");
});
onBeforeRouteUpdate((to, from, next) => {
  fetchTag(typeof to.params.id === "string" ? to.params.id : "");
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
