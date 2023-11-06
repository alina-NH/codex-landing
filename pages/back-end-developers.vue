<template>
  <Welcome :data="beContent.welcome" />
  <TextBoxes
    :data="beContent.textBoxes"
    hasTitle
    titlePosition="left"
    withIcon
  />
  <TabbedContent
    hasTitle
    titlePosition="left"
    :data="beContent.tabsIcons"
    component="IconBox"
  />
  <TextBoxes :data="beContent.textBoxes2" hasTitle titlePosition="left" />

  <ImageBoxes
    :data="beContent.mvpCases"
    hasTitle
    titlePosition="left"
    withTestimonial
  />
  <ContactForm :data="beContent.contactForm" />
</template>

<script setup lang="ts">
import beContent from "../content/back-end-developers.json";

const store = useContentStore();
store.setPageContent(beContent);
</script>
