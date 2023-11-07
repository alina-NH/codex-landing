<template>
  <Welcome :data="dvisContent.welcome" />
  <ImageArticle
    :data="dvisContent.articleWithImageAndText"
    articleAlignment="center"
    textAlignment="center"
    buttonStyle="fill"
    component="text"
  />
  <TextBoxes
    :data="dvisContent.textBoxes"
    titlePosition="left"
    withIcon
  />
  <TabbedContent
    hasTitle
    titlePosition="left"
    :data="dvisContent.tabsIcons"
    component="IconBox"
  />
  <ImageBoxes
    :data="dvisContent.Cases"
    hasTitle
    titlePosition="left"
    withTestimonial
  />
  <ContactForm :data="dvisContent.contactForm" />
</template>

<script setup lang="ts">
import dvisContent from "../content/3d-visualisation.json";

const store = useContentStore();
store.setPageContent(dvisContent);
</script>
