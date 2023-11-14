<template>
  <section
    :id="data?.id"
    class="image-boxes"
    :class="{ 'image-boxes--filtered': filterMode }"
  >
    <SectionTitle
      v-if="data.title"
      :id="data?.id"
      :position="titlePosition"
    >
      {{ data.title }}
    </SectionTitle>
    <div
      class="image-boxes__body"
      :class="{
        'image-boxes__body--three-in-row': !data.imageBoxes[0]?.testimonial,
        'image-boxes__body--four-in-row': data.imageBoxes.every(
          box => !box.description
        )
      }"
    >
      <ImageBox
        v-for="imageBoxData in data.imageBoxes"
        :data="imageBoxData"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const {
  data,
  titlePosition,
  filterMode,
} = defineProps<{
  data: ImageBoxes,
  titlePosition?: keyof typeof SectionTitlePosition,
  filterMode?: boolean,
}>();
</script>

<style scoped lang="scss" src="./ImageBoxes.scss" />
