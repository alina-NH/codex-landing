<template>
  <Welcome :data="artContent.welcome" />
  <ImageArticle
    :data="artContent.articleWithImageAndText"
    articleAlignment="center"
    textAlignment="center"
    buttonStyle="fill"
    component="text"
  />
  <TextBoxes
    :data="artContent.textBoxes"
    titlePosition="left"
    withIcon
  />
  <TabbedContent
    hasTitle
    titlePosition="left"
    :data="artContent.tabsIcons"
    component="IconBox"
  />
  <ImageBoxes
    :data="artContent.Cases"
    hasTitle
    titlePosition="left"
    withTestimonial
  />
  <ContactForm type="extended" :data="artContent.contactForm" />
</template>

<script setup lang="ts">
import artContent from "../content/art-and-culture.json";

const store = useContentStore();
store.setPageContent(artContent);
</script>
