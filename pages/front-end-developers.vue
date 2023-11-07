<template>
  <Welcome :data="feContent.welcome" />
  <TextBoxes
    :data="feContent.textBoxes"
    titlePosition="left"
  />
  <TabbedContent
    titlePosition="left"
    :data="feContent.tabsIcons"
    component="IconBox"
  />
  <TextBoxes :data="feContent.textBoxes2" titlePosition="left" />

  <ImageBoxes
    :data="feContent.mvpCases"
    titlePosition="left"
  />
  <ContactForm
    type="extended"
    :data="feContent.contactForm"
  />
</template>

<script setup lang="ts">
import feContent from "../content/front-end-developers.json";

const store = useContentStore();
store.setPageContent(feContent);
</script>
