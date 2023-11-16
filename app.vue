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
  description,
  gtagConversion,
}: DefaultMeta) => {
  useHead({
    title: title,
    meta: [
      { name: 'description', content: description }
    ],
    script: [
      {
        innerHTML: `
        function gtag_report_conversion(url) {
          var callback = function () {
            if (typeof(url) != 'undefined') {
              window.location = url;
            }
          };
          gtag('event', 'conversion', {
              'send_to': 'AW-957998787/${gtagConversion}',
              'event_callback': callback
          });
          return false;
        }
        `,
        tagPosition: 'bodyClose',
      },
    ]
  });
};

watch(getPageContent, () => {
  changePageColors(getPageContent.value.colors);
  changePageMeta(getPageContent.value.meta);
});
</script>