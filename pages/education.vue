<template>
  <Welcome :data="eduContent.welcome" />
  <ImageArticle
    :data="eduContent.articleWithImageAndText"
    articleAlignment="center"
    textAlignment="center"
    buttonStyle="fill"
    component="text"
  />
  <TextBoxes
    :data="eduContent.textBoxes"
    titlePosition="left"
    withIcon
  />
  <TabbedContent
    hasTitle
    titlePosition="left"
    :data="eduContent.tabsIcons"
    component="IconBox"
  />
  <ImageBoxes
    :data="eduContent.Cases"
    hasTitle
    titlePosition="left"
    withTestimonial
  />
  <ContactForm :data="eduContent.contactForm" />
</template>

<script setup lang="ts">
import eduContent from "../content/education.json";

const store = useContentStore();
store.setPageContent(eduContent);
</script>
