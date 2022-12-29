<template>
  <div v-if="!article">loading</div>
  <div v-else>
    <h1 class="text-4xl">
      {{ article.fields.title }}
    </h1>
    <div class="flex py-1 space-x-2">
      <p>{{ dateFormatter(article.fields.publishedDate) }}</p>
      <p>
        Category:
        <router-link
          :to="`/category/${article.fields.category.sys.id}`"
          class="text-black hover:underline"
          >{{ article.fields.category.fields.categoryName }}</router-link
        >
      </p>
      <p>
        Tag:
        <router-link
          v-for="tag in article.fields.tags"
          :key="tag.sys.id"
          :to="`/tag/${tag.sys.id}`"
          class="text-black mr-1 hover:underline"
        >
          #{{ tag.fields.tagName }}
        </router-link>
      </p>
    </div>
    <hr class="my-4" />
    <div v-for="component in article.fields.articleBody.content" class="py-3">
      <h1 v-if="component.nodeType === 'heading-1'" class="text-6xl py-2">
        <span v-for="content in component.content">
          {{ content.value }}
        </span>
      </h1>
      <h2 v-if="component.nodeType === 'heading-2'" class="text-5xl py-2">
        <span v-for="content in component.content">
          {{ content.value }}
        </span>
      </h2>
      <h3 v-if="component.nodeType === 'heading-3'" class="text-4xl py-2">
        <span v-for="content in component.content">
          {{ content.value }}
        </span>
      </h3>
      <h4 v-if="component.nodeType === 'heading-4'" class="text-3xl py-2">
        <span v-for="content in component.content">
          {{ content.value }}
        </span>
      </h4>
      <h5 v-if="component.nodeType === 'heading-5'" class="text-2xl py-2">
        <span v-for="content in component.content">
          {{ content.value }}
        </span>
      </h5>
      <h6 v-if="component.nodeType === 'heading-6'" class="text-xl py-2">
        <span v-for="content in component.content">
          {{ content.value }}
        </span>
      </h6>
      <p v-if="component.nodeType === 'paragraph'">
        <span
          v-for="content in component.content"
          :class="getClass(content.marks)"
          class="py-2"
        >
          <a
            v-if="content.nodeType === 'hyperlink'"
            :href="content.data.uri"
            class="text-blue-800 visited:text-purple-600 underline"
          >
            <span v-for="value in content.content">
              {{ value.value }}
            </span>
          </a>
          {{ content.value }}
        </span>
      </p>
      <blockquote
        v-if="component.nodeType === 'blockquote'"
        class="p-4 my-4 bg-gray-200 border-l-4 border-gray-300 py-2"
      >
        <p class="text-black">
          <span v-for="paragraphContent in component.content">
            <a
              v-if="paragraphContent.nodeType === 'hyperlink'"
              :href="paragraphContent.data.uri"
              class="text-blue-800 visited:text-purple-600 underline py-2"
            >
              <span v-for="linkContent in paragraphContent.content">
                {{ linkContent.value }}
              </span>
            </a>
            <span v-for="textContent in paragraphContent.content">
              {{ textContent.value }}
            </span>
          </span>
        </p>
      </blockquote>
      <hr v-if="component.nodeType === 'hr'" class="py-2" />
      <img
        v-if="component.nodeType === 'embedded-asset-block'"
        :src="component.data.target.fields.file.url"
        :alt="component.data.target.fields.description"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { dateFormatter } from "@/utils";
// import RichTextRenderer from "contentful-rich-text-vue-renderer";
defineProps({
  article: {
    type: Object,
    required: true,
  },
});
function getClass(marks: any) {
  if (!marks) {
    return "";
  }
  let className = "";
  marks.forEach((mark: any) => {
    if (mark.type === "bold") {
      className += "font-bold";
    }
    if (mark.type === "italic") {
      className += "italic";
    }
    if (mark.type === "underline") {
      className += "underline";
    }
    if (mark.type === "code") {
      className += "font-mono";
    }
  });
  return className;
}
</script>
