<template>
  <Welcome :data="testContent.welcome" />
  <ImageArticle
    :data="testContent.imageArticle"
    component="list"
    button-style="outline"
    image-to-right
    textAlignment="left"
    button-alignment="left"
    title-size="large"
  />
  <IconBoxes
    :data="testContent.iconBoxesWithTitles"
    title-position="left"
    icon-to-top
  />
  <IconBoxes
    :data="testContent.iconBoxesWithoutTitles"
    title-position="center"
  />
</template>
  

<script setup lang="ts">
import testContent from '../content/test.json';

const store = useContentStore();
store.setPageContent(testContent);
</script>