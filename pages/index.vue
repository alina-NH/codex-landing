<template>
  <Welcome :data="mainContent.welcome" />
  <ImageArticle
    :data="mainContent.articleWithImage2"
    buttonStyle="fill"
    imageToLeft
  />
  <ImageArticle
    :data="mainContent.articleWithImage3"
    buttonStyle="fill"
    imageToRight
  />
  <ContactForm :data="mainContent.contactForm2" />
  <ImageBoxes
    :data="mainContent.mvpCases"
    withTestimonial
  />
  <ContactForm :data="mainContent.contactForm" />
</template>

<script setup lang="ts">
import mainContent from "../content/main.json";

const store = useContentStore();
store.setPageContent(mainContent);
</script>
