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
  />
  <TabbedContent
    titlePosition="left"
    :data="eduContent.tabsIcons"
    component="IconBox"
  />
  <ImageBoxes
    :data="eduContent.Cases"
    titlePosition="left"
  />
  <ContactForm
    type="extended"
    :data="eduContent.contactForm"
  />
</template>

<script setup lang="ts">
import eduContent from "../content/education.json";

const store = useContentStore();
store.setPageContent(eduContent);
</script>
