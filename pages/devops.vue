<template>
  <Welcome :data="devopsContent.welcome" />
  <TextBoxes
    :data="devopsContent.textBoxes"
    hasTitle
    titlePosition="left"
    withIcon
  />
  <TabbedContent
    hasTitle
    titlePosition="left"
    :data="devopsContent.tabsIcons"
    component="IconBox"
  />
  <TextBoxes :data="devopsContent.textBoxes2" hasTitle titlePosition="left" />

  <ImageBoxes
    :data="devopsContent.mvpCases"
    hasTitle
    titlePosition="left"
    withTestimonial
  />
  <ContactForm
    type="extended"
    :data="devopsContent.contactForm"
  />
</template>

<script setup lang="ts">
import devopsContent from "../content/devops.json";

const store = useContentStore();
store.setPageContent(devopsContent);
</script>
