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
  <ImageBoxes :data="mainContent.mvpCases" withTestimonial />
  <ImageBoxes :data="mainContent.mvpCases2" withTestimonial />
  <ImageBoxes :data="mainContent.mvpCases3" withTestimonial />
  <ContactForm :data="mainContent.contactForm" />
</template>

<script setup lang="ts">
import mainContent from "../content/main.json";
import useContentStore from "../store/index";

const store = useContentStore();
store.setPageContent(mainContent);
</script>
