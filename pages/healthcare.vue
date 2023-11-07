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
    />
    <TabbedContent
      hasTitle
      titlePosition="left"
      :data="healthcareContent.tabsIcons"
      component="IconBox"
    />
    <SquaresTimeline
    :data="healthcareContent.squareTimeline"
    hasTitle
    titlePosition="left"
  />
    <TextBoxes
    :data="healthcareContent.textBoxes2"
    titlePosition="left"
    withIcon
    hasTitle
  />

    <ImageBoxes
      :data="healthcareContent.Cases"
      hasTitle
      titlePosition="left"
      withTestimonial
    />
    <ContactForm type="extended" :data="healthcareContent.contactForm" />
  </template>
  
  <script setup lang="ts">
  import healthcareContent from "../content/healthcare.json";
  
  const store = useContentStore();
  store.setPageContent(healthcareContent);
  </script>