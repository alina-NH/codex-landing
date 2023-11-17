<template>
  <Welcome :data="artContent.welcome" />
  <ImageArticle
    :data="artContent.articleWithImageAndText"
    articleAlignment="center"
    textAlignment="center"
    buttonStyle="fill"
    component="text"
  />
  <TextBoxes
      :data="artContent.textBoxes"
      titlePosition="left"
    />
    <TabbedContent
    titlePosition="left"
    :data="artContent.tabsIcons"
    component="IconBox"
    icons-background="transparent"
  />
  <ImageArticle
    :data="artContent.articleWithImageAndText2"
    articleAlignment="center"
    textAlignment="center"
    buttonStyle="fill"
    component="text"
  />
  <TextBoxes
    :data="artContent.textBoxes2"
    titlePosition="left"
  />
  <ContactForm
    type="simplified"
    :data="artContent.contactFormSimplified"
    component="list"
  />
  <ImageBoxes
    :data="artContent.Cases"
    titlePosition="left"
  />
  <ContactForm
    type="extended"
    :data="artContent.contactForm"
  />
</template>

<script setup lang="ts">
import artContent from "../content/art-and-culture.json";

const store = useContentStore();
store.setPageContent(artContent);
</script>
