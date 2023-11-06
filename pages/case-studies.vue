<template>
  <Welcome :data="casestudiesContent.welcome" />

  <TabbedContent
    withTestimonial
    :data="casestudiesContent.tabsImageBox"
    component="ImageBox"
  />

  <ContactForm :data="casestudiesContent.contactForm" />
</template>

<script setup lang="ts">
import casestudiesContent from "../content/case-studies.json";

const store = useContentStore();
store.setPageContent(casestudiesContent);
</script>
