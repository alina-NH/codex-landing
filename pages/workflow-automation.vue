<template>
  <Welcome :data="wfaContent.welcome" />
  <ImageArticle
    :data="wfaContent.articleWithImageAndText"
    articleAlignment="center"
    textAlignment="center"
    buttonStyle="fill"
    component="text"
  />
  <TextBoxes
    :data="wfaContent.textBoxes"
    titlePosition="left"
  />
  <TabbedContent
    titlePosition="left"
    :data="wfaContent.tabsIcons"
    component="IconBox"
  />
  <ImageBoxes
    :data="wfaContent.Cases"
    titlePosition="left"
  />
  <ContactForm
    type="extended"
    :data="wfaContent.contactForm"
  />
</template>

<script setup lang="ts">
import wfaContent from "../content/workflow-automation.json";

const store = useContentStore();
store.setPageContent(wfaContent);
</script>
