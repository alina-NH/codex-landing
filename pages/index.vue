<template>
  <Welcome :data="mainContent.welcome" />
  <ImageArticle
    :data="mainContent.articleWithImage2"
    buttonStyle="fill"
    imageToLeft
  />
  <TabbedContent
    hasTitle
    titlePosition="left"
    :data="mainContent.tabsIcons"
    component="IconBox"
  />
  <ContactForm :data="mainContent.contactForm2" />
  <ImageBoxes
    :data="mainContent.mvpCases"
    hasTitle
    titlePosition="center"
    withTestimonial
  />
  <ContactForm :data="mainContent.contactForm" />

  <TabbedContent
    hasTitle
    titlePosition="left"
    :data="mainContent.tabsImageBox"
    component="ImageBox"
    withTestimonial
  />
  <TabbedContent
    hasTitle
    titlePosition="left"
    :data="mainContent.tabsImageBox"
    component="ImageBox"
  />
  <TextBoxes
    hasTitle
    :data="mainContent.textBoxes"
    titlePosition="left"
    withIcon
  />
  <TextBoxes
    :data="mainContent.textBoxes"
    titlePosition="left"
  />
  <TabbedContent
    hasTitle
    titlePosition="left"
    :data="mainContent.tabsTextBox"
    component="TextBox"
    withIcon
  />
</template>

<script setup lang="ts">
import mainContent from "../content/main.json";

const store = useContentStore();
store.setPageContent(mainContent);
</script>
