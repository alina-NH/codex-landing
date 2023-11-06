<template>
    <Welcome :data="healthcareContent.welcome" />
    <ImageArticle
      :data="healthcareContent.articleWithImageAndText"
      articleAlignment="center"
      textAlignment="center"
      buttonStyle="fill"
      component="text"
    />
    <TextBoxes
      :data="healthcareContent.textBoxes"
      titlePosition="left"
      withIcon
    />
    <TabbedContent
      hasTitle
      titlePosition="left"
      :data="healthcareContent.tabsIcons"
      component="IconBox"
    />
    <ImageBoxes
      :data="healthcareContent.Cases"
      hasTitle
      titlePosition="left"
      withTestimonial
    />
    <ContactForm :data="healthcareContent.contactForm" />
  </template>
  
  <script setup lang="ts">
  import healthcareContent from "../content/healthcare.json";
  
  const store = useContentStore();
  store.setPageContent(healthcareContent);
  </script>