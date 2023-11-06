<template>
  <Welcome :data="pubContent.welcome" />
  <ImageArticle
    :data="pubContent.articleWithImageAndText"
    articleAlignment="center"
    textAlignment="center"
    buttonStyle="fill"
    component="text"
  />
  <TextBoxes
    :data="pubContent.textBoxes"
    titlePosition="left"
    withIcon
  />
  <TabbedContent
    hasTitle
    titlePosition="left"
    :data="pubContent.tabsIcons"
    component="IconBox"
  />
  <ImageBoxes
    :data="pubContent.Cases"
    hasTitle
    titlePosition="left"
    withTestimonial
  />
  <ContactForm :data="pubContent.contactForm" />
</template>

<script setup lang="ts">
import pubContent from "../content/publishing.json";

const store = useContentStore();
store.setPageContent(pubContent);
</script>
