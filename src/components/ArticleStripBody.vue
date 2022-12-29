<template>
  <h1>{{ articleBody }}</h1>
</template>
<script setup lang="ts">
const props = defineProps<{
  articleBodyComponents: Array<any>;
}>();
let articleBody = "";
for (let i = 0; i < props.articleBodyComponents.length; i++) {
  if (props.articleBodyComponents[i].nodeType === "paragraph") {
    articleBody += props.articleBodyComponents[i].content[0].value;
    break;
  }
}
</script>
