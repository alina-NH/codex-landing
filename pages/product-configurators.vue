<template>
  <Welcome :data="prconfContent.welcome" />
  <ImageArticle
    :data="prconfContent.articleWithImageAndText"
    articleAlignment="center"
    textAlignment="center"
    buttonStyle="fill"
    component="text"
  />
  <TextBoxes
    :data="prconfContent.textBoxes"
    titlePosition="left"
  />
  <TabbedContent
    titlePosition="left"
    :data="prconfContent.tabsIcons"
    component="IconBox"
    icons-background="transparent"
  />
  <ContactForm
    type="simplified"
    :data="prconfContent.contactFormSimplified"
    component="list"
  />
  <ImageBoxes
    :data="prconfContent.Cases"
    titlePosition="left"
  />
  <ContactForm
    type="extended"
    :data="prconfContent.contactForm"
  />
</template>

<script setup lang="ts">
import prconfContent from "../content/product-configurators.json";

const store = useContentStore();
store.setPageContent(prconfContent);
</script>
