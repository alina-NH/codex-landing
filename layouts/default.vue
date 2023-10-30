<template>
  <ClientOnly>
    <Header />
    <slot />
  </ClientOnly>
</template>

<script setup lang="ts">
import defaultContent from '../content/default.json';
import useContentStore from '../store/index';

const store = useContentStore();
store.setDefaultContent(defaultContent);
</script>