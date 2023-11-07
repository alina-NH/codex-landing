<template>
  <Welcome :data="mainContent.welcome" />
  <ImageArticle
    :data="mainContent.articleWithImageAndText"
    articleAlignment="center"
    textAlignment="center"
    buttonAlignment="center"
    buttonStyle="fill"
    titleSize="large"
    component="text"
  />
  <TabbedContent
    titlePosition="left"
    :data="mainContent.tabsIcons"
    component="IconBox"
  />
  <ContactForm
    type="extended"
    :data="mainContent.contactForm2"
  />
  <ImageBoxes
    :data="mainContent.mvpCases"
    titlePosition="left"
  />
  <ContactForm
    type="extended"
    :data="mainContent.contactForm"
  />
</template>

<script setup lang="ts">
import mainContent from "../content/main.json";

const store = useContentStore();
store.setPageContent(mainContent);
</script>
