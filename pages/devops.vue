<template>
<Welcome :data="devopsContent.welcome" />
<ContactForm :data="devopsContent.contactForm" />
</template>
<script setup lang="ts">
import mainContent from "../content/devops.json";
import useContentStore from "../store/index";

const store = useContentStore();
store.setPageContent(devopsContent);
</script>