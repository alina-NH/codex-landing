<template>
  <ImageArticle
    :data="hireDevelopersContent.articleWithImage"
    buttonStyle="fill"
  />
  <ImageArticle
    :data="hireDevelopersContent.anotherArticleWithImage"
    buttonStyle="outline"
    imageToRight
  />
  <ImageBoxes
    :data="hireDevelopersContent.mvpCases"
    withTestimonial
  />
  <ImageBoxes
    :data="hireDevelopersContent.anotherMVPCases"
  />
</template>

<script setup lang="ts">
import hireDevelopersContent from '../content/main.json';

const store = useContentStore();
store.setPageContent(hireDevelopersContent);
</script>