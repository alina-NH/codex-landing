<template>
  <section
    class="image-boxes"
    :class="{ 'image-boxes--filtered': filterMode }"
  >
    <SectionTitle
      v-if="hasTitle"
      :position="titlePosition"
    >
      {{ data.title }}
    </SectionTitle>
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
  </section>
</template>

<script setup lang="ts">
const {
  data,
  withTestimonial,
  hasTitle,
  titlePosition,
} = defineProps<{
  data: ImageBoxes,
  withTestimonial?: boolean,
  hasTitle?: boolean,
  titlePosition?: keyof typeof SectionTitlePosition,
  filterMode?: boolean,
}>();
</script>

<style scoped lang="scss" src="./ImageBoxes.scss" />