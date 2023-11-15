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
  />
  <TabbedContent
    titlePosition="left"
    :data="dvisContent.tabsIcons"
    component="IconBox"
    icons-background="transparent"
  />
  <ContactForm
    type="simplified"
    :data="dvisContent.contactFormSimplified"
    component="list"
  />
  <ImageBoxes
    :data="dvisContent.Cases"
    titlePosition="left"
  />
  <ContactForm
    type="extended"
    :data="dvisContent.contactForm"
  />
</template>

<script setup lang="ts">
import dvisContent from "../content/3d-visualisation.json";

const store = useContentStore();
store.setPageContent(dvisContent);
</script>
