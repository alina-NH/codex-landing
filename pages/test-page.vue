<template>
<ImageArticle
:data="testContent.topslider"
buttonStyle="outline"
imageToLeft
/>
<ImageArticle
:data="testContent.topslider2"
buttonStyle="outline"
imageToRight
/>
<Person
:data="testContent.person1"
/>
<ImageBoxes
:data="testContent.bigcase"
withTestimonial
/>
<ImageBoxes
:data="testContent.smallcase"
/>
</template>


<script setup lang="ts">
import testContent from '../content/test-page.json';
import useContentStore from '../store/index';

const store = useContentStore();
store.setPageContent(testContent);
</script>