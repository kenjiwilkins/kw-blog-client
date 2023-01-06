<template>
  <h1>{{ articleBody }}</h1>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
const props = defineProps<{
  articleBodyComponents: Array<any>;
}>();
const articleBody = ref("");
onMounted(() => {
  for (let i = 0; i < props.articleBodyComponents.length; i++) {
    if (props.articleBodyComponents[i].nodeType === "paragraph") {
      articleBody.value += props.articleBodyComponents[i].content[0].value;
      break;
    }
  }
});
</script>
