<template>
  <Welcome :data="mainContent.welcome" />
  <VerticalSpace height="20vh" />
  <ImageArticle
    :data="mainContent.articleWithImageAndText"
    articleAlignment="center"
    textAlignment="center"
    buttonAlignment="center"
    buttonStyle="fill"
    titleSize="large"
    component="text"
  />
  <VerticalSpace height="20vh" />
  <TabbedContent
    titlePosition="left"
    :data="mainContent.tabsIcons"
    component="IconBox"
    icons-background="transparent"
  />
  <VerticalSpace height="20vh" />
  <ContactForm
    type="simplified"
    :data="mainContent.contactFormSimplified"
    component="list"
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
