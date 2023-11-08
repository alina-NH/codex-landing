<template>
  <Welcome :data="devopsContent.welcome" />
  <TextBoxes
    :data="devopsContent.textBoxes"
    titlePosition="left"
  />
  <TabbedContent
    titlePosition="left"
    :data="devopsContent.tabsIcons"
    component="IconBox"
    icons-background="transparent"
  />
  <TextBoxes :data="devopsContent.textBoxes2" hasTitle titlePosition="left" />

  <ImageBoxes
    :data="devopsContent.mvpCases"
    titlePosition="left"
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
