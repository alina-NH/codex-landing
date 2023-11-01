<template>
<Welcome :data="beContent.welcome" />
<ContactForm :data="beContent.contactForm" />
</template>
<script setup lang="ts">
import mainContent from "../content/back-end-developers.json";
import useContentStore from "../store/index";

const store = useContentStore();
store.setPageContent(beContent);
</script>