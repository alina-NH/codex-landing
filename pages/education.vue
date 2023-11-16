<template>
  <Welcome :data="eduContent.welcome" />
  <ImageArticle
    :data="eduContent.articleWithImageAndText"
    articleAlignment="center"
    textAlignment="center"
    buttonStyle="fill"
    component="text"
  />
  <TextBoxes
      :data="eduContent.textBoxes"
      titlePosition="left"
    />
    <TabbedContent
    titlePosition="left"
    :data="eduContent.tabsIcons"
    component="IconBox"
    icons-background="transparent"
  />
  <ImageArticle
    :data="eduContent.articleWithImageAndText2"
    articleAlignment="center"
    textAlignment="center"
    buttonStyle="fill"
    component="text"
  />
  <TextBoxes
    :data="eduContent.textBoxes2"
    titlePosition="left"
  />
  
  <ContactForm
    type="simplified"
    :data="eduContent.contactFormSimplified"
    component="list"
  />
  <ImageBoxes
    :data="eduContent.Cases"
    titlePosition="left"
  />
  <ContactForm
    type="extended"
    :data="eduContent.contactForm"
  />
</template>

<script setup lang="ts">
import eduContent from "../content/education.json";

const store = useContentStore();
store.setPageContent(eduContent);
</script>
