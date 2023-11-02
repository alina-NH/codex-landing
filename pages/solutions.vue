<template>
<ImageBoxes
  :data="solutionsContent.imageBoxesSolutions"
/>
<ImageArticle
  :data="solutionsContent.articleAboutServices"
  buttonStyle="outline"
  imageToLeft
/>
</template>

<script setup lang="ts">
import solutionsContent from '../content/solutions.json';

const store = useContentStore();
store.setPageContent(solutionsContent);
</script>