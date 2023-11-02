<template>
<Welcome :data="feContent.welcome" />
<ImageBoxes :data="feContent.mvpCases" withTestimonial />
<ImageBoxes :data="feContent.mvpCases2" />
<ContactForm :data="feContent.contactForm" />
</template>

<script setup lang="ts">
import feContent from "../content/front-end-developers.json";

const store = useContentStore();
store.setPageContent(feContent);
</script>