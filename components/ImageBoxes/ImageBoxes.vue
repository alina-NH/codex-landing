<template>
  <div class="image-boxes">
    <SectionTitle>{{ data.title }}</SectionTitle>
    <div
      class="image-boxes__body"
      :class="{ 'image-boxes__body--short': !withTestimonial }"
    >
      <ImageBox
        v-for="imageBoxData in data.imageBoxes"
        :data="imageBoxData"
        :withTestimonial="withTestimonial"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data, withTestimonial } = defineProps<{
  data: {
    type: ImageBox,
    required: true,
  },
  withTestimonial?: boolean
}>();
</script>

<style scoped lang="scss" src="./ImageBoxes.scss" />