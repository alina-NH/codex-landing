<template>
    <VerticalSpace height="20vh" />
    <ImageArticle
    :data="tyContent.articleWithImageAndText"
    articleAlignment="center"
    textAlignment="center"
    buttonAlignment="center"
    buttonStyle="fill"
    titleSize="large"
    component="text"
    image-to-right
  />
  <VerticalSpace height="20vh" />
    </template>

    <script setup lang="ts">
    import tyContent from '../content/thank-you.json';
    
    const store = useContentStore();
    store.setPageContent(tyContent);
    </script>