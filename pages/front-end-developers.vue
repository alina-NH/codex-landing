<template>
<Welcome :data="feContent.welcome" />
<ContactForm :data="feContent.contactForm" />
</template>

<script setup lang="ts">
import mainContent from "../content/front-end-developers.json";
import useContentStore from "../store/index";

const store = useContentStore();
store.setPageContent(feContent);
</script>