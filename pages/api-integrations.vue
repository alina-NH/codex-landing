<template>
  <Welcome :data="apiintContent.welcome" />
  <ImageArticle
    :data="apiintContent.articleWithImageAndText"
    articleAlignment="center"
    textAlignment="center"
    buttonStyle="fill"
    component="text"
  />
  <TextBoxes
    :data="apiintContent.textBoxes"
    titlePosition="left"
  />
  <TabbedContent
    titlePosition="left"
    :data="apiintContent.tabsIcons"
    component="IconBox"
    icons-background="transparent"
  />
  <ImageBoxes
    :data="apiintContent.Cases"
    titlePosition="left"
  />
  <ContactForm
    type="extended"
    :data="apiintContent.contactForm"
  />
</template>

<script setup lang="ts">
import apiintContent from "../content/api-integrations.json";

const store = useContentStore();
store.setPageContent(apiintContent);
</script>
