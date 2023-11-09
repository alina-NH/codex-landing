<template>
    <Welcome :data="s2Content.welcome" />
    <ImageArticle
    :data="s2Content.articleWithImageAndList"
    buttonStyle="outline"
    imageToRight
    component="list"
  />
  <TabbedContent
    titlePosition="left"
    :data="s2Content.tabsIcons"
    component="IconBox"
    background="black"
    icons-background="transparent"
  />
  <ImageArticle
    :data="s2Content.articleWithListAndText2"
    articleAlignment="left"
    textAlignment="left"
    buttonStyle="fill"
    component="list"
  />
  <ImageBoxes
      :data="s2Content.CasesMVP"
      titlePosition="center"
    />
    <ContactForm
    type="simplified"
    :data="s2Content.contactFormSimplified"
    component="list"
    />
    <ImageBoxes
      :data="s2Content.Cases"
      titlePosition="left"
    />
    <SquaresTimeline
    :data="s2Content.squareTimeline"
    hasTitle
    titlePosition="center"
  />
  <ContactForm
      type="extended"
      :data="s2Content.contactForm"
    />

    </template>
    <script setup lang="ts">
    import s2Content from "../content/startups-new.json";
    
    const store = useContentStore();
    store.setPageContent(s2Content);
    </script>
