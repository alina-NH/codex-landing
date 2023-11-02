<template>
<Welcome :data="beContent.welcome" />
<ImageBoxes :data="beContent.mvpCases" withTestimonial />
<ImageBoxes :data="beContent.mvpCases2" />
<ContactForm :data="beContent.contactForm" />
</template>
<script setup lang="ts">
import beContent from "../content/back-end-developers.json";

const store = useContentStore();
store.setPageContent(beContent);
</script>