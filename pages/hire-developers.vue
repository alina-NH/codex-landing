<template>
  <ImageBoxes
    :data="hireDevelopersContent.mvpCases"
  />
</template>

<script setup lang="ts">
import hireDevelopersContent from '../content/main.json';

const store = useContentStore();
store.setPageContent(hireDevelopersContent);
</script>