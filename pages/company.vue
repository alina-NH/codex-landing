<template>
    <Welcome :data="cmpnContent.welcome" />
    <SquaresTimeline
    title-position="left"
    :data="cmpnContent.squaresTimeline"
  />
  
  <ImageBoxes
    :data="cmpnContent.imageBoxesSmallExecs"
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
    