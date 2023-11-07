<template>
  <Welcome :data="printingContent.welcome" />
  <TextBoxes
    :data="printingContent.textBoxes"
    hasTitle
    titlePosition="left"
    withIcon
  />
  <TabbedContent
    hasTitle
    titlePosition="left"
    :data="printingContent.tabsIcons"
    component="IconBox"
  />
  <ImageBoxes
    :data="printingContent.Cases"
    hasTitle
    titlePosition="left"
    withTestimonial
  />
  <ContactForm
    type="extended"
    :data="printingContent.contactForm"
  />
</template>

<script setup lang="ts">
import printingContent from "../content/printing.json";

const store = useContentStore();
store.setPageContent(printingContent);
</script>
