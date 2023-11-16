
<template>
  <HeaderMobile
    v-if="isMobile() || isTablet()"
    :isRenderButton="isRenderButton"
  />
  <HeaderDesktop
    v-else
    :isRenderButton="isRenderButton"
  />
</template>

<script setup lang="ts">
const isRenderButton = ref(true);
const route = useRoute();

const setIsRenderButton = () => {
  isRenderButton.value = !!document.querySelector('.contact-form');
};

onMounted(setIsRenderButton);
watch(() => route.fullPath, setIsRenderButton);
</script>