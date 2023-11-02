<template>
  <div class="image-box">
    <img
      :src="useImages(data.background)"
      :alt="data.title"
      class="image-box__background"
    />
    <div class="image-box__body">
      <h4 class="heading-4 image-box__title">
        {{ data.title }}
      </h4>
      <p class="text-default image-box__description">
        {{ data.description }}
      </p>
      <p
        v-if="withTestimonial && data.testimonial"
        class="text-default image-box__testimonial"
      >
        {{ data.testimonial }}
      </p>
      <Person
        v-if="withTestimonial && data.author"
        :data="data.author"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data, withTestimonial } = defineProps<{
  data: ImageBox,
  withTestimonial?: boolean,
}>();
</script>

<style scoped lang="scss" src="./ImageBox.scss" />