<template>
  <div
    class="icon-box"
    :class="{ 
      'icon-box--link': data?.link,
      'icon-box--titled': data?.title,
      'icon-box--reversed': iconToTop,
    }"
    :style="{
      'background': data?.background || background,
      'border-color': data?.background,
    }"
    @click="data?.link && openLink(data.link)"
  >
    <h4
      :v-if="data?.title"
      class="heading-5"
    >
      {{ data.title }}
    </h4>
    <img
      :src="useImages(data.icon)"
      :alt="data.alt"
      class="icon-box__icon"
    />
  </div>
</template>

<script setup lang="ts">
const {
  data,
  background,
  iconToTop,
} = defineProps<{
  data: IconBox,
  background?: string,
  iconToTop?: boolean,
}>();
</script>

<style scoped lang="scss" src="./IconBox.scss" />