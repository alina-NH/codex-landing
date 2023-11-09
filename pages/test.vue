<template>
  <Welcome :data="testContent.welcome" />
</template>
  

<script setup lang="ts">
import testContent from '../content/test.json';

const store = useContentStore();
store.setPageContent(testContent);
</script>