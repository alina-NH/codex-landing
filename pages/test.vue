<template>
  <Welcome
    :data="testContent.welcome"
    imageToLeft
  />
  <SectionTitle position="center">Article with image and list: image right, button outline</SectionTitle>
  <ImageArticle
    :data="testContent.articleWithImageAndList"
    buttonStyle="outline"
    imageToRight
    component="list"
  />
  <SectionTitle position="left">Article with image and list: image left, button fill</SectionTitle>
  <ImageArticle
    :data="testContent.articleWithImageAndList"
    buttonStyle="fill"
    component="list"
  />
  <SectionTitle position="center">Article with image and text: image left, button fill</SectionTitle>
  <ImageArticle
    :data="testContent.articleWithImageAndText"
    buttonStyle="fill"
    component="text"
  />
  <SectionTitle position="center">Article with image and text: image left, no button</SectionTitle>
  <ImageArticle
    :data="testContent.articleWithImageAndText"
    buttonStyle="fill"
    component="text"
  />
  <SectionTitle position="center">Article with text: no image, no button</SectionTitle>
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
  <SectionTitle position="center">Text center, article center, button right</SectionTitle>
  <ImageArticle
    :data="testContent.articleWithImageAndText"
    articleAlignment="center"
    textAlignment="center"
    buttonAlignment="right"
    buttonStyle="fill"
    component="text"
  />
  <SectionTitle position="center">Text center, article center, button center</SectionTitle>
  <ImageArticle
    :data="testContent.articleWithImageAndText"
    articleAlignment="center"
    textAlignment="center"
    buttonAlignment="center"
    buttonStyle="fill"
    component="text"
  />
  <SectionTitle position="center">Title large</SectionTitle>
  <ImageArticle
    :data="testContent.articleWithImageAndText"
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
    articleAlignment="center"
    textAlignment="center"
    titleSize="small" 
    component="text"
  />
  <SectionTitle position="center">List component (service component, use with Squares timeline)</SectionTitle>
  <List :data="testContent.list" />
  <SquaresTimeline
    :data="testContent.squareTimeline"
    titlePosition="left"
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
  />
  <ImageBoxes
    :data="testContent.cases"
    titlePosition="left"
  />
  <TabbedContent
    titlePosition="left"
    :data="testContent.tabsIcons"
    component="IconBox"
  />
  <SectionTitle position="center">Vertical space 10vh</SectionTitle>
  <VerticalSpace height="20vh" />
  <ContactForm
    type="simplified"
    :data="testContent.contactFormSimplified"
    component="list"
    form-to-left
  />
  <TextBoxes
    :data="testContent.textBoxes"
    titlePosition="left"
    text-alignment="left"
  />
  <TextBoxes
    :data="testContent.textBoxes"
    titlePosition="left"
    text-alignment="right"
  />
  <TextBoxes
    :data="testContent.textBoxes"
    titlePosition="left"
    text-alignment="center"
  />
  <Welcome
    :data="testContent.welcomeWithColors"
    imageToLeft
  />
  <TabbedContent
    titlePosition="center"
    :data="testContent.tabsIcons"
    icons-background="green"
    component="IconBox"
  />
  <IconBoxes
    :data="testContent.iconBoxes"
  />
  <IconBoxes
    :data="testContent.iconBoxesWithTitles"
  />
  <IconBoxes
    :data="testContent.iconBoxesWithTitles"
    icon-to-top
  />
  <TabbedContent
    titlePosition="left"
    :data="testContent.tabsIconsWithTitle"
    component="IconBox"
  />
  <ImageBoxes
    :data="testContent.imageBoxesSmall"
    titlePosition="center"
  />
</template>
  

<script setup lang="ts">
import testContent from '../content/test.json';

const store = useContentStore();
store.setPageContent(testContent);
</script>