<script setup lang="ts">
const {
  public: { base },
} = useRuntimeConfig();
useHead({
  link: [
    {
      rel: "icon",
      href: `${base}favicon.ico`,
      type: "image/x-icon",
      id: "favicon"
    }
  ],
  htmlAttrs: {
      lang: 'en'
    },
  meta: [
    { name: 'description', content: 'Author: ebolblga, Small website for 0D Cellular Automata (0D CA) exploration' }
  ],
});
</script>

<template>
  <div class="h-screen">
    <slot />
  </div>
</template>

<style>
body {
  background: #1d0f44;
  background-size: 100% 100%;
  font-size: 14px;
  color: #f44e38;
  margin: 0;
}
</style>