<template>
  <Welcome :data="feContent.welcome" />
  <TextBoxes
    :data="feContent.textBoxes"
    hasTitle
    titlePosition="left"
    withIcon
  />
  <TabbedContent
    hasTitle
    titlePosition="left"
    :data="feContent.tabsIcons"
    component="IconBox"
  />
  <TextBoxes :data="feContent.textBoxes2" hasTitle titlePosition="left" />

  <ImageBoxes
    :data="feContent.mvpCases"
    hasTitle
    titlePosition="left"
    withTestimonial
  />
  <ContactForm :data="feContent.contactForm" />
</template>

<script setup lang="ts">
import feContent from "../content/front-end-developers.json";

const store = useContentStore();
store.setPageContent(feContent);
</script>
