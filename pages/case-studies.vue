<template>
  <Welcome :data="casestudiesContent.welcome" />

  <TabbedContent
    :data="casestudiesContent.tabsImageBox"
    component="ImageBox"
  />

  <ContactForm
    type="extended"
    :data="casestudiesContent.contactForm"
  />
</template>

<script setup lang="ts">
import casestudiesContent from "../content/case-studies.json";

const store = useContentStore();
store.setPageContent(casestudiesContent);
</script>
