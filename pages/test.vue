<template>
  <SectionTitle position="center"
    >Article with image and list: image right, button outline</SectionTitle
  >
  <ImageArticle
    :data="testContent.articleWithImageAndList"
    buttonStyle="outline"
    imageToRight
    component="list"
    hasButton
    hasImage
  />
  <SectionTitle position="center"
    >Article with image and list: image left, button fill</SectionTitle
  >
  <ImageArticle
    :data="testContent.articleWithImageAndList"
    buttonStyle="fill"
    component="list"
    hasButton
    hasImage
  />
  <SectionTitle position="center"
    >Article with image and text: image left, button fill</SectionTitle
  >
  <ImageArticle
    :data="testContent.articleWithImageAndText"
    buttonStyle="fill"
    component="text"
    hasButton
    hasImage
  />
  <SectionTitle position="center"
    >Article with image and text: image left, no button</SectionTitle
  >
  <ImageArticle
    :data="testContent.articleWithImageAndText"
    buttonStyle="fill"
    component="text"
    hasImage
  />
  <SectionTitle position="center"
    >Article with text: no image, no button</SectionTitle
  >
  <ImageArticle
    :data="testContent.articleWithImageAndText"
    buttonStyle="fill"
    component="text"
  />
  <SectionTitle position="center">Article left, Text left</SectionTitle>
  <ImageArticle
    :data="testContent.articleWithImageAndText"
    articleAlignment="left"
    textAlignment="left"
    buttonStyle="fill"
    component="text"
  />
  <SectionTitle position="center">Text right, article right</SectionTitle>
  <ImageArticle
    :data="testContent.articleWithImageAndText"
    articleAlignment="right"
    textAlignment="right"
    buttonStyle="fill"
    component="text"
  />
  <SectionTitle position="center">Text center, article center</SectionTitle>
  <ImageArticle
    :data="testContent.articleWithImageAndText"
    articleAlignment="center"
    textAlignment="center"
    buttonStyle="fill"
    component="text"
  />
  <SectionTitle position="center"
    >Text center, article center, button right</SectionTitle
  >
  <ImageArticle
    :data="testContent.articleWithImageAndText"
    hasButton
    articleAlignment="center"
    textAlignment="center"
    buttonAlignment="right"
    buttonStyle="fill"
    component="text"
  />
  <SectionTitle position="center"
    >Text center, article center, button center</SectionTitle
  >
  <ImageArticle
    :data="testContent.articleWithImageAndText"
    hasButton
    articleAlignment="center"
    textAlignment="center"
    buttonAlignment="center"
    buttonStyle="fill"
    component="text"
  />
  <SectionTitle position="center">Title large</SectionTitle>
  <ImageArticle
    :data="testContent.articleWithImageAndText"
    hasButton
    articleAlignment="center"
    textAlignment="center"
    buttonAlignment="center"
    buttonStyle="fill"
    titleSize="large"
    component="text"
  />
  <SectionTitle position="center">Article with bottom text</SectionTitle>
  <ImageArticle
    :data="testContent.articleWithBottomText"
    hasBottomText
    articleAlignment="center"
    textAlignment="center"
    titleSize="small"
    component="text"
  />
  <SectionTitle position="center">List component (service component, use with Squares timeline)</SectionTitle>
  <List :data="testContent.list" />
  <SquaresTimeline
    :data="testContent.squareTimeline"
    hasTitle
    titlePosition="center"
  />
  <SectionTitle position="center">Contact form extended</SectionTitle>
  <ContactForm
    type="extended"
    :data="testContent.contactFormExtended"
  />
  <SectionTitle position="center">Contact form simplified</SectionTitle>
  <ContactForm
    type="simplified"
    :data="testContent.contactFormSimplified"
    component="list"
    hasSubtitle
  />
</template>

<script setup lang="ts">
import testContent from "../content/test.json";

const store = useContentStore();
store.setPageContent(testContent);
</script>
