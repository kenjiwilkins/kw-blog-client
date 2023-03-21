<template>
  <div
    class="flex justify-center items-center min-h-screen bg-black text-white font-normal"
  >
    <div class="flex flex-col gap-2">
      <div>
        <h1 class="text-7xl">404<span class="blink">_</span></h1>
      </div>
      <div>
        <h2 class="text-3xl">We must have misplaced that page</h2>
      </div>
      <div>
        <button
          class="rounded-lg border-white border px-12 py-3"
          @click="redirectToHome"
        >
          Take me Home
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
function redirectToHome() {
  window.location.href = "/";
}
</script>
<style scoped>
.blink {
  animation: blink-animation 1s steps(5, start) infinite;
  -webkit-animation: blink-animation 1s steps(5, start) infinite;
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
</style>
