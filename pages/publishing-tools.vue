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
  />
  <TabbedContent
    titlePosition="left"
    :data="pubtContent.tabsIcons"
    component="IconBox"
  />
  <ImageBoxes
    :data="pubtContent.Cases"
    titlePosition="left"
  />
  <ContactForm
    type="extended"
    :data="pubtContent.contactForm"
  />
</template>

<script setup lang="ts">
import pubtContent from "../content/publishing-tools.json";

const store = useContentStore();
store.setPageContent(pubtContent);
</script>
