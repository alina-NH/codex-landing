<template>
  <Welcome :data="repdataContent.welcome" />
  <ImageArticle
    :data="repdataContent.articleWithImageAndText"
    articleAlignment="center"
    textAlignment="center"
    buttonStyle="fill"
    component="text"
  />
  <TextBoxes
    :data="repdataContent.textBoxes"
    titlePosition="left"
    withIcon
  />
  <TabbedContent
    hasTitle
    titlePosition="left"
    :data="repdataContent.tabsIcons"
    component="IconBox"
  />
  <ImageBoxes
    :data="repdataContent.Cases"
    hasTitle
    titlePosition="left"
    withTestimonial
  />
  <ContactForm type="extended" :data="repdataContent.contactForm" />
</template>

<script setup lang="ts">
import repdataContent from "../content/reporting-and-data-visualisation.json";

const store = useContentStore();
store.setPageContent(repdataContent);
</script>
