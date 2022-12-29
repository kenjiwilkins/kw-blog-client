<template>
  <ul v-if="articles">
    <li
      v-for="article in articles.items"
      :key="article.sys.id"
      class="border border-solid rounded-lg min-w-fit mb-5"
    >
      <div
        v-if="article.fields"
        @click="jumpToArticle(article.sys.id)"
        class="flex"
      >
        <div class="flex space-y-2 space-x-6 p-4 hover:bg-gray-100">
          <div class="flex flex-col relative pr-4 pb-6">
            <h2 class="text-xl font-light flex-shrink-0">
              {{ article.fields.title }}
            </h2>
            <p>{{ dateFormatter(article.fields.publishedDate) }}</p>
            <ArticleStripBody
              :articleBodyComponents="article.fields.articleBody.content"
            />
            <div class="flrx space-x-2 absolute min-w-max bottom-0">
              <a v-if="article.fields.category"
                >Category:
                <span
                  @click.stop="jumpToCategory(article.fields.category.sys.id)"
                  class="hover:underline hover:cursor-pointer"
                  >{{ article.fields.category.fields.categoryName }}</span
                ></a
              >
              <a v-if="article.fields.tags"
                >Tag:
                <span
                  v-for="tag in article.fields.tags"
                  :key="tag.sys.id"
                  @click.stop="jumpToTag(tag.sys.id)"
                  class="hover:underline hover:cursor-pointer mr-1"
                >
                  #{{ tag.fields.tagName }}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
import { getArticles, getCategoryArticles, getTagArticles } from "@/api";
import { dateFormatter } from "@/utils";
import ArticleStripBody from "./ArticleStripBody.vue";

const router = useRouter();
const route = useRoute();
const articles = ref();
function jumpToArticle(id: string) {
  router.push(`/article/${id}`);
}
function jumpToCategory(id: string) {
  router.push(`/category/${id}`);
}
function jumpToTag(id: string) {
  router.push(`/tag/${id}`);
}
function fetchArticles(path: string, id: string | string[]) {
  console.log(path, id);
  if (path.match(/category/g)) {
    getCategoryArticles(typeof id === "string" ? id : "").then((entries) => {
      articles.value = entries;
    });
  } else if (path.match(/tag/g)) {
    getTagArticles(typeof id === "string" ? id : "").then((entries) => {
      articles.value = entries;
    });
  } else {
    getArticles().then((entries) => {
      articles.value = entries;
    });
  }
}
onMounted(() => {
  fetchArticles(route.path, route.params.id);
});
onBeforeRouteUpdate((to, from, next) => {
  fetchArticles(to.path, to.params.id);
  next();
});
</script>
