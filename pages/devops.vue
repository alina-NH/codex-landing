<template>
<Welcome :data="devopsContent.welcome" />
<ImageBoxes :data="devopsContent.mvpCases" withTestimonial />
<ImageBoxes :data="devopsContent.mvpCases2" />
<ContactForm :data="devopsContent.contactForm" />
</template>
<script setup lang="ts">
import devopsContent from "../content/devops.json";
import useContentStore from "../store/index";

const store = useContentStore();
store.setPageContent(devopsContent);
</script>