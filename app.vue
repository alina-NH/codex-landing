<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import useContentStore from './store/index';

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
}: {
  primary: string,
  hover: string,
  black: string,
  darkgrey: string,
  lightgrey: string,
  secondary: string,
  white: string,
}) => {
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
}: {
  title: string,
  description: string,
}) => {
  useHead({
    title: title,
    meta: [
      { name: 'description', content: description }
    ],
  });
};

watch(getPageContent, () => {
  changePageColors(getPageContent.value?.colors);
  changePageMeta(getPageContent.value?.meta);
});
</script>