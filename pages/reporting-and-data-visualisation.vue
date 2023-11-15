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
  />
  <TabbedContent
    titlePosition="left"
    :data="repdataContent.tabsIcons"
    component="IconBox"
    icons-background="transparent"
  />
  <ContactForm
    type="simplified"
    :data="repdataContent.contactFormSimplified"
    component="list"
  />
  <ImageBoxes
    :data="repdataContent.Cases"
    titlePosition="left"
  />
  <ContactForm
    type="extended"
    :data="repdataContent.contactForm"
  />
</template>

<script setup lang="ts">
import repdataContent from "../content/reporting-and-data-visualisation.json";

const store = useContentStore();
store.setPageContent(repdataContent);
</script>
