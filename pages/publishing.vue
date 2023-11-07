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
    titlePosition="left"
    :data="pubContent.tabsIcons"
    component="IconBox"
  />
  <ImageBoxes
    :data="pubContent.Cases"
    titlePosition="left"
  />
  <ContactForm
    type="extended"
    :data="pubContent.contactForm"
  />
</template>

<script setup lang="ts">
import pubContent from "../content/publishing.json";

const store = useContentStore();
store.setPageContent(pubContent);
</script>
