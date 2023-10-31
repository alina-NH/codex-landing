<template>
  <ClientOnly>
    <Header />
    <div class="main">
      <slot />
    </div>
    <Footer />
  </ClientOnly>
</template>

<script setup lang="ts">
import defaultContent from '../content/default.json';
import useContentStore from '../store/index';

const store = useContentStore();
store.setDefaultContent(defaultContent);
</script>

<style scoped lang="scss">
.main {
  margin-top: $header-height;
}
</style>