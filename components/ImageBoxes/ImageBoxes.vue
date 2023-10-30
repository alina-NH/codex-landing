<template>
  <div
    class="image-boxes"
    :class="{ 'image-boxes--short': !withTestimonial }"
  >
    <ImageBox
      v-for="imageBoxData in content"
      :data="imageBoxData"
      :withTestimonial="withTestimonial"
    />
  </div>
</template>

<script setup lang="ts">
import ImageBox from './ImageBox/ImageBox.vue';
import useContentStore from '../store/index';

const { data, withTestimonial } = defineProps<{
  data: object,
  withTestimonial?: boolean
}>();

const { pageContent: { imageBoxes } } = useContentStore();
const content = ref(data || imageBoxes);
</script>

<style scoped lang="scss" src="./ImageBoxes.scss" />