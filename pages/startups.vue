<template>
    <Welcome :data="startupsContent.welcome" />




    <ImageArticle
      :data="startupsContent.articleWithImageAndText"
      articleAlignment="center"
      textAlignment="center"
      buttonStyle="fill"
      component="text"
    />

    <ImageArticle
    :data="startupsContent.articleWithImageAndText2"
    articleAlignment="left"
    textAlignment="left"
    buttonStyle="fill"
    component="list"
  />
  
  <ImageArticle
    :data="startupsContent.articleWithImageAndText3"
    articleAlignment="left"
    textAlignment="left"
    buttonStyle="fill"
    component="list"
    imageToRight
  />

  <ImageArticle
    :data="startupsContent.articleWithImageAndText4"
    articleAlignment="left"
    textAlignment="left"
    buttonStyle="fill"
    component="list"
  />
  <ImageBoxes
      :data="startupsContent.CasesMVP"
      titlePosition="left"
    />
 
    <SquaresTimeline
    :data="startupsContent.squareTimeline"
    hasTitle
    titlePosition="center"
  />
 
    <ImageBoxes
      :data="startupsContent.Cases"
      titlePosition="left"
    />
    <ContactForm
      type="extended"
      :data="startupsContent.contactForm"
    />
  </template>
  
  <script setup lang="ts">
  import startupsContent from "../content/startups.json";
  
  const store = useContentStore();
  store.setPageContent(startupsContent);
  </script>