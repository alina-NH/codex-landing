<template>
  <Welcome :data="pubtContent.welcome" />
  <ImageArticle
    :data="pubtContent.articleWithImageAndText"
    articleAlignment="center"
    textAlignment="center"
    buttonStyle="fill"
    component="text"
  />
  <TextBoxes
    :data="pubtContent.textBoxes"
    titlePosition="left"
    withIcon
  />
  <TabbedContent
    hasTitle
    titlePosition="left"
    :data="pubtContent.tabsIcons"
    component="IconBox"
  />
  <ImageBoxes
    :data="pubtContent.Cases"
    hasTitle
    titlePosition="left"
    withTestimonial
  />
  <ContactForm :data="pubtContent.contactForm" />
</template>

<script setup lang="ts">
import pubtContent from "../content/publishing-tools.json";

const store = useContentStore();
store.setPageContent(pubtContent);
</script>
