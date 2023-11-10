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
  <ContactForm
    type="simplified"
    component="list"
    formToLeft
    :data="testContent.contactFormSimplified"
  />
  <IconBoxes
    :data="testContent.iconBoxesWithoutTitles"
    title-position="center"
  />
  <ContactForm
    type="extended"
    :data="testContent.contactFormExtended"
  />
  <ImageBoxes
    :data="testContent.imageBoxesWithTestimonial"
  />
  <ImageBoxes
    :data="testContent.imageBoxesWithoutTestimonial"
  />
  <ImageBoxes
    title-position="left"
    :data="testContent.imageBoxesWithoutDescription"
  />
</template>
  

<script setup lang="ts">
import testContent from '../content/test.json';

const store = useContentStore();
store.setPageContent(testContent);
</script>