<template>
  <ImageBoxes
    :data="mainContent.mvpCases"
    withTestimonial
  />
  <ImageBoxes
    :data="mainContent.anotherMVPCases"
  />
  <ImageArticle
    :data="mainContent.articleWithImage"
    buttonStyle="fill"
  />
  <ImageArticle
    :data="mainContent.anotherArticleWithImage"
    buttonStyle="outline"
    imageToRight
  />
</template>

<script setup lang="ts">
import mainContent from '../content/main.json';
import useContentStore from '../store/index';

const store = useContentStore();
store.setPageContent(mainContent);
</script>