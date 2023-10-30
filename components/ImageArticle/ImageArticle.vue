<template>
  <section
    class="image-article"
    :class="{
      'image-article--reversed': imageToRight,
    }"
  >
    <img
      :src="useImages(data.image)"
      role="background"
      class="image-article__background"
    />
    <article class="image-article__body">
      <h3 class="heading-3 image-article__title">
        {{ data.title }}
      </h3>
      <p class="text-default-bold image-article__subtitle">
        {{ data.subtitle }}
      </p>
      <ul class="text-default image-article__list">
        <li v-for="item in data.list">
          {{ item }}
        </li>
      </ul>
      <Button :style="buttonStyle">
        {{ data.button }}
      </Button>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ButtonStyle } from '../../types/default.ts';
import Button from '../Button/Button.vue';

const { data, buttonStyle } = defineProps<{
  data: object,
  buttonStyle: ButtonStyle,
  imageToRight?: boolean,
  imageToLeft?: boolean,
}>();
</script>

<style scoped lang="scss" src="./ImageArticle.scss" />