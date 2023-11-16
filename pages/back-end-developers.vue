<template>
  <Welcome :data="beContent.welcome" />
  <TextBoxes
    :data="beContent.textBoxes"
    titlePosition="left"
  />
  <TabbedContent
    titlePosition="left"
    :data="beContent.tabsIcons"
    component="IconBox"
    icons-background="transparent"
  />
  <ContactForm
    type="simplified"
    :data="beContent.contactFormSimplified"
    component="list"
  />
  <TextBoxes :data="beContent.textBoxes2" titlePosition="left" />
  
  <ImageBoxes
    :data="beContent.mvpCases"
    titlePosition="left"
  />
  <ContactForm
    type="extended"
    :data="beContent.contactForm"
  />
</template>

<script setup lang="ts">
import beContent from "../content/back-end-developers.json";

const store = useContentStore();
store.setPageContent(beContent);
</script>
