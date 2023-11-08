<template>
    <Welcome :data="cmpnContent.welcome" />
    <ImageArticle
    :data="cmpnContent.articleWithImageAndText1"
    articleAlignment="center"
    textAlignment="center"
    buttonAlignment="center"
    buttonStyle="fill"
    titleSize="large"
    component="text"
  />
  <ImageBoxes
    :data="cmpnContent.imageBoxesSmallExecs"
    titlePosition="center"
  />
  <ImageBoxes
    :data="cmpnContent.imageBoxesSmallDevs"
    titlePosition="center"
  />
  <TabbedContent
    :data="cmpnContent.tabsImageBox"
    component="ImageBox"
  />
  <ContactForm
    type="extended"
    :data="cmpnContent.contactForm"
  />
    </template>

    <script setup lang="ts">
    import cmpnContent from "../content/company.json";
    const store = useContentStore();
    store.setPageContent(cmpnContent);
    </script>
    