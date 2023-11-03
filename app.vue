<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const store = useContentStore();
const { getPageContent } = storeToRefs(store);

const changePageColors = ({
  primary,
  hover,
  black,
  darkgrey,
  lightgrey,
  secondary,
  white
}: DefaultColors) => {
  document.body.style.setProperty('--primary-color', primary);
  document.body.style.setProperty('--hover-color', hover);
  document.body.style.setProperty('--black-color', black);
  document.body.style.setProperty('--darkgrey-color', darkgrey);
  document.body.style.setProperty('--lightgrey-color', lightgrey);
  document.body.style.setProperty('--secondary-color', secondary);
  document.body.style.setProperty('--white-color', white);
};

const changePageMeta = ({
  title,
  description
}: DefaultMeta) => {
  useHead({
    title: title,
    meta: [
      { name: 'description', content: description }
    ],
  });
};

watch(getPageContent, () => {
  changePageColors(getPageContent.value.colors);
  changePageMeta(getPageContent.value.meta);
});
</script>