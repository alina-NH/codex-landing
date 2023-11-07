<template>
  <Welcome :data="mainContent.welcome" />
  <ImageArticle
    :data="mainContent.articleWithImageAndText"
    hasButton
    articleAlignment="center"
    textAlignment="center"
    buttonAlignment="center"
    buttonStyle="fill"
    titleSize="large"
    component="text"
  />
  <TabbedContent
    hasTitle
    titlePosition="left"
    :data="mainContent.tabsIcons"
    component="IconBox"
  />
  <ContactForm
    type="extended"
    :data="mainContent.contactForm2"
  />
  <ImageBoxes
    :data="mainContent.mvpCases"
    hasTitle
    titlePosition="left"
    withTestimonial
  />
  <ContactForm
    type="extended"
    :data="mainContent.contactForm"
  />
</template>

<script setup lang="ts">
import mainContent from "../content/main.json";

const store = useContentStore();
store.setPageContent(mainContent);
</script>
