<template>
  <Welcome :data="printingContent.welcome" />
  <ImageArticle
    :data="printingContent.articleWithImageAndText"
    articleAlignment="center"
    textAlignment="center"
    buttonStyle="fill"
    component="text"
  />
  <TextBoxes
      :data="printingContent.textBoxes"
      titlePosition="left"
    />
    <TabbedContent
    titlePosition="left"
    :data="printingContent.tabsIcons"
    component="IconBox"
    icons-background="transparent"
  />
  <ImageArticle
    :data="printingContent.articleWithImageAndText2"
    articleAlignment="center"
    textAlignment="center"
    buttonStyle="fill"
    component="text"
  />
  <TextBoxes
    :data="printingContent.textBoxes2"
    titlePosition="left"
  />
    <ContactForm
    type="simplified"
    :data="printingContent.contactFormSimplified"
    component="list"
  />
  <ImageBoxes
    :data="printingContent.Cases"
    titlePosition="left"
  />
  <ContactForm
    type="extended"
    :data="printingContent.contactForm"
  />
</template>

<script setup lang="ts">
import printingContent from "../content/printing.json";

const store = useContentStore();
store.setPageContent(printingContent);
</script>
