<script setup lang="ts">
import { ref, onMounted } from "vue";
import { client } from "@/api/apiTemplate";
const imageUrl = ref("");
onMounted(() => {
  client.getAsset("WDnU59NfHfPuRAxNhFsHF").then((asset) => {
    imageUrl.value = "https:" + asset.fields.file.url;
  });
});
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-2 pb-6">
    <img :src="imageUrl" class="w-32 h-32" alt="Michael Kenji image" />
    <h1>Michael Kenji Wilkins (中嶋マイケル賢侍)</h1>
    <p>A Frontend Engineer</p>
    <div>
      <ul class="flex space-x-2">
        <li>
          <a
            href="https://www.linkedin.com/in/michael-kenji-wilkins-2a7a8a155/"
            class="hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/kenjiwilkins" class="hover:underline">
            GitHub
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
