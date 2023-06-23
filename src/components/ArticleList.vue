<template>
  <ul v-if="articles">
    <li
      v-for="article in props.articles.items"
      :key="article.sys.id"
      class="border border-solid rounded-lg min-w-fit mb-5"
    >
      <div
        v-if="article.fields"
        @click="jumpToArticle(article.sys.id)"
        class="flex"
      >
        <div
          class="flex space-y-2 space-x-6 p-4 hover:bg-gray-100 hover:cursor-pointer"
        >
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
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import { dateFormatter } from "@/utils";
import ArticleStripBody from "./ArticleStripBody.vue";
import type { ArticleModel } from "@/types/contentful";

const router = useRouter();
const props = defineProps<{
  articles: ArticleModel;
}>();
function jumpToArticle(id: string) {
  router.push(`/article/${id}`);
}
function jumpToCategory(id: string) {
  router.push(`/category/${id}`);
}
function jumpToTag(id: string) {
  router.push(`/tag/${id}`);
}
</script>
