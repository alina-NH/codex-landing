<template>
<Welcome :data="casestudiesContent.welcome" />
  <ImageBoxes
    :data="casestudiesContent.featured1"
    withTestimonial
  />
  <ImageBoxes
    :data="casestudiesContent.nonfeatured1"
  />
  <ImageBoxes
    :data="casestudiesContent.featured2"
    withTestimonial
  />
  <ImageBoxes
    :data="casestudiesContent.nonfeatured2"
    />
    <ImageBoxes
    :data="casestudiesContent.featured3"
    withTestimonial
  />
  <ImageBoxes
    :data="casestudiesContent.nonfeatured3"
    withTestimonial
  />
  <ImageBoxes
    :data="casestudiesContent.featured4"
    withTestimonial
  />
  <ImageBoxes
    :data="casestudiesContent.nonfeatured4"
    />

<ContactForm :data="casestudiesContent.contactForm" />

</template>
<script setup lang="ts">
import casestudiesContent from "../content/case-studies.json";

const store = useContentStore();
store.setPageContent(casestudiesContent);
</script>
